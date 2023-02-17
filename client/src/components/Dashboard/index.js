import React, { useState } from "react";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Editor from "./components/Editor";
import Home from "./components/Home";
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
  const [contentSize, setContentSize] = useState(1);
  const [mainContent, setMainContent] = useState("Home");
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Sidebar setMainContent={setMainContent} />
          <ContentWrapper>
            {mainContent === "AddNote" ? (
              <>
                <Editor
                  contentSize={contentSize}
                  setContentSize={setContentSize}
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
