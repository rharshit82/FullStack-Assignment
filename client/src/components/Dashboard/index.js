import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Editor from "./components/Editor";
import Home from "./components/Home";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useAlert } from "react-alert";
import socket from "../../socket";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  position: relative;
`;
const ContentWrapper = styled.div`
  margin-left: 20vw;
  transition: all 0.3s ease-in-out;
`;
const Dashboard = () => {
  const { user } = useAuth0();
  const alert = useAlert();
  const [contentSize, setContentSize] = useState(1);
  const [mainContent, setMainContent] = useState("Home");
  const [currentNoteID, setCurrentNoteID] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fruit, setFruit] = useState("Pears");

  useEffect(() => {
    console.log(socket)
    socket.emit("joined", { noteDbId: currentNoteID });
  }, [socket, currentNoteID]);
  

  useEffect(() => {
    socket.emit("enteringNote", {noteDbId: currentNoteID, note: {title, content, fruit}})
    console.log(title, content, fruit)
  }, [title, content, fruit])


  const addNote = async () => {
    if (!user) {
      alert.error("User not Logged In");
    }
    try {
      const res = await axios({
        method: "post",
        url: "/notes/createNote",
        data: {
          email: user.email,
          title,
          content,
          fruit,
        },
      });
      if (res.status === 201) {
        setCurrentNoteID(res.data);
        setTitle("");
        setContent("");
        setFruit("Pears")
        console.log(res.data);
      } else {
        alert.error("Some Error Occured");
      }
    } catch (err) {
      alert.error("Some Error Occured");
    }
  };
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Sidebar setMainContent={setMainContent} addNote={addNote} />
          <ContentWrapper>
            {mainContent === "AddNote" ? (
              <>
                <Editor
                  contentSize={contentSize}
                  setContentSize={setContentSize}
                  setFruit={setFruit}
                  fruit={fruit}
                  title={title}
                  setTitle={setTitle}
                  content={content}
                  setContent={setContent}
                />
                <RightSidebar
                  contentSize={contentSize}
                  setContentSize={setContentSize}
                />
              </>
            ) : null}
            {mainContent === "Home" ? (
              <>
                <Home />
              </>
            ) : null}
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
