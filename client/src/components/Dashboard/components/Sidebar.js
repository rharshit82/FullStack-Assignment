import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  background: ${(props) => props.theme.purpleLight};
  position: fixed;
  width: 25vw;
  height: 100%;
`;
const AddNoteContainer = styled.div`
  padding-left: 3rem;
  display: flex;
  align-items: center;
  & svg {
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 50%;
    padding: 0.5rem 0.5rem;
  }
`;
const AddPostText = styled.h3`
  margin-left: 2rem;
  color: ${(props) => props.theme.white};
`;
const Sidebar = () => {
  return (
    <Container>
      <AddNoteContainer>
        <FontAwesomeIcon icon={faPlus} />
        <AddPostText>Add Post</AddPostText>
      </AddNoteContainer>
    </Container>
  );
};

export default Sidebar;
