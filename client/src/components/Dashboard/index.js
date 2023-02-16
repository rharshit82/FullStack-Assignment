import React from "react";
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
  const [isRightSidebarOpen, setIsRightSidebarOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Header setIsRightSidebarOpen={setIsRightSidebarOpen} />
        <Content>
          <Sidebar />
          <ContentWrapper>
            <Editor />
          </ContentWrapper>
          {isRightSidebarOpen && <RightSidebar />}
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
