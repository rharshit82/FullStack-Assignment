import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import styled from "styled-components/macro";
import Pdf from "react-to-pdf";
const ScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 88vh;
  display: flex;
  flex-direction: row;
  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: grey;
    outline: 1px solid slategrey;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const NoteContainer = styled.div`
  position: relative;
  height: 10rem;
  width: 50rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  & > svg {
    margin-left: auto;
    height: 1rem;
    color: ${(props) => props.theme.red};
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
      outline: 1px solid ${(props) => props.theme.red};

      border-radius: 50%;
    }
  }
  &::after {
    position: absolute;
    right: 1rem;
    content: "";
    height: 5rem;
    width: 5rem;
    top: 50%;
    transform: translateY(-50%);

    display: block;

    opacity: 0.4;
    z-index: -1;

    ${(props) =>
      props.fruit === "Pears" &&
      `background: url("/assets/fruits/pears.jpg") no-repeat;`}
    ${(props) =>
      props.fruit === "Apple" &&
      `background: url("/assets/fruits/apple.jpg") no-repeat; 
    opacity: 0.6;`}
    ${(props) =>
      props.fruit === "Mango" &&
      `background: url("/assets/fruits/mango.jpg") no-repeat; 
    opacity: 0.6;`}
    ${(props) =>
      props.fruit === "Strawberry" &&
      `background: url("/assets/fruits/strawberry.jpg") no-repeat; 
    opacity: 0.6;`}

    background-size: 100%;
  }
`;
const NoteTitle = styled.h2`
  margin-bottom: 1rem;
`;
const NoteContent = styled.p``;
const Checkbox = styled.img`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;
const NoteWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
`;
const SubmitButton = styled.div`
  cursor: pointer;
  position: fixed;
  top: 10rem;
  right: 10rem;
  border: 1px solid black;
  padding: 2rem;
  border-radius: 1rem;
  background: #22a905;
  color: white;
`;
const Download = () => {
  const alert = useAlert();
  const { user, isLoading } = useAuth0();
  const [notes, setNotes] = useState([]);
  const ref = React.createRef();
  useEffect(() => {
    const getNotes = async () => {
      if (isLoading) return;
      try {
        const res = await axios({
          method: "post",
          url: "/notes/getNotes",
          data: {
            email: user.email,
          },
        });
        if (res.status === 201) {
          console.log(res.data);
          setNotes(
            res.data.map((note) => {
              return {
                ...note,
                checked: false,
              };
            })
          );
        } else {
          alert.error("Some Error Occured");
        }
      } catch (err) {
        alert.error("Some Error Occured");
      }
    };
    getNotes();
  }, []);
  const generatePDF = () => {
    const selectedNotes = notes.filter((note) => note.checked);
  };
  const pdfComponent = () => {
    return (
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  };
  
  return (
    <ScrollWrapper ref={ref}>
      <Container>
        {notes.map((note, index) => {
          return (
            <Note
              note={note}
              key={note._id}
              setNotes={setNotes}
              notes={notes}
            />
          );
        })}
      </Container>

      <Pdf targetRef={ref} filename='StickyNotes.pdf'>
        {({ toPdf }) => (
          <SubmitButton onClick={toPdf}>Generate PDF </SubmitButton>
        )}
      </Pdf>
    </ScrollWrapper>
  );
};
const Note = ({ note, notes, setNotes }) => {
  const changeChecked = () => {
    const updatedNote = { ...note, checked: !note.checked };
    const updatedNotes = [...notes];
    const index = updatedNotes.findIndex((n) => n._id === note._id);
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };
  return (
    <NoteWrapper onClick={changeChecked}>
      <Checkbox
        src={
          note.checked
            ? "/assets/checked-checkbox.png"
            : "/assets/unchecked-checkbox.png"
        }
      />
      <NoteContainer fruit={note.fruit} key={note._id}>
        <NoteTitle>{note.title}</NoteTitle>
        <NoteContent dangerouslySetInnerHTML={{ __html: note.content }} />
      </NoteContainer>
    </NoteWrapper>
  );
};

export default Download;
