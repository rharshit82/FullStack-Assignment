import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDown } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  transition: all 1s ease-in-out;

  position: absolute;
  right: 0rem;
  top: 0rem;
  background: ${(props) => props.theme.purpleLight};
  width: 5vw;
  z-index: 1;
  height: 88vh;
  color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  row-gap: 2rem;
  & svg {
    height: 2rem;
    width: 2rem;
    &:nth-child(2) {
      transform: rotate(180deg);
    }
  }
`;
const RightSidebar = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faUpLong} />
      <FontAwesomeIcon icon={faUpLong} />
    </Container>
  );
};

export default RightSidebar;
