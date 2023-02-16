import React, {useState} from "react";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Editor from "./components/Editor";
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
`;
const Dashboard = () => {
    const [contentSize, setContentSize] = useState(1);
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Sidebar />
          <ContentWrapper>
            <Editor contentSize={contentSize}  setContentSize={setContentSize}/>
            <RightSidebar contentSize={contentSize}  setContentSize={setContentSize}/>
          </ContentWrapper>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
