import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faHome,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  background: ${(props) => props.theme.purpleLight};
  position: absolute;
  width: 20vw;
  height: 88vh;
`;
const MenuItemContainer = styled.div`
  cursor: pointer;

  padding-top: 2rem;
  padding-bottom: 2rem;
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
const MenuItem = styled.h3`
  margin-left: 2rem;
  color: ${(props) => props.theme.white};
`;
const LineBreak = styled.div`
  border: 1px solid ${(props) => props.theme.white};
  opacity: 0.2;
`;
const Sidebar = ({ setMainContent, addNote }) => {
  return (
    <Container>
      <MenuItemContainer onClick={() => setMainContent("Home")}>
        <FontAwesomeIcon icon={faHome} />
        <MenuItem>Home</MenuItem>
      </MenuItemContainer>
      <LineBreak />
      <MenuItemContainer
        onClick={() => {
          setMainContent("AddNote");
          addNote();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
        <MenuItem>Add Note</MenuItem>
      </MenuItemContainer>

      <LineBreak />
      <MenuItemContainer
        onClick={() => {
          setMainContent("YourNotes");
        }}
      >
        <FontAwesomeIcon icon={faNoteSticky} />
        <MenuItem>Your Notes</MenuItem>
      </MenuItemContainer>
      <LineBreak />
      <MenuItemContainer
        onClick={() => {
          setMainContent("Download");
        }}
      >
        <FontAwesomeIcon icon={faNoteSticky} />
        <MenuItem>Download PDF</MenuItem>
      </MenuItemContainer>

      <LineBreak />
    </Container>
  );
};

export default Sidebar;
