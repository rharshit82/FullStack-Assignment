import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const ScrollWrapper = styled.div`
  overflow-y: scroll;
  height: 88vh;
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
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const NoteContainer = styled.div`
  position: relative;
  height: 30rem;
  width: 25rem;
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
  &::before {
    position: absolute;
    content: "";
    height: 30rem;
    width: 22rem;

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
const YourNotes = () => {
  const alert = useAlert();
  const { user, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
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
          setNotes(res.data);
        } else {
          alert.error("Some Error Occured");
        }
      } catch (err) {
        alert.error("Some Error Occured");
      }
    };
    getNotes();
  }, []);
  const deletePost = async (id) => {
    try {
      const res = await axios({
        method: "post",
        url: "/notes/deleteNote",
        data: {
          id,
        },
      });
      if (res.status === 200) {
        setNotes((notes) => notes.filter((note) => note._id!== id));

      } else {
        alert.error("Some Error Occured");
      }
    } catch (err) {
      alert.error("Some Error Occured");
    }
  };
  return (
    <ScrollWrapper>
      <Container>
        {notes.map((note) => {
          return (
            <NoteContainer fruit={note.fruit} key={note._id}>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => deletePost(note._id)}
              />
              <NoteTitle>{note.title}</NoteTitle>
              <NoteContent dangerouslySetInnerHTML={{ __html: note.content }} />
            </NoteContainer>
          );
        })}
      </Container>
    </ScrollWrapper>
  );
};

export default YourNotes;
