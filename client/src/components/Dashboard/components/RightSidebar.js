import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
    background: ${(props) => props.theme.blue};
    width: 40vw;
    z-index:1;
    color: ${(props) => props.theme.white};
`;
const RightSidebar = () => {
  return (
    <Container>
      <h1>Hi</h1>
    </Container>
  );
};

export default RightSidebar;
