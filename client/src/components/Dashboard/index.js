import React from "react";
import styled from "styled-components/macro";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Content = styled.div``;
const Dashboard = () => {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = React.useState(false);

  return (
    <>
      <Container>
        <Header setIsRightSidebarOpen={setIsRightSidebarOpen} />
        <Content>
          <Sidebar />
        </Content>
      </Container>
      {isRightSidebarOpen && <RightSidebar />}
    </>
  );
};

export default Dashboard;
