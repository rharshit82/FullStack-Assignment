import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
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
  & svg {
    height: 2rem;
    width: 2rem;
  }
  & div:nth-child(2) svg {
    transform: rotate(180deg);
  }
`;
const Label = styled.p`
  font-size: 1rem;
  text-align: center;
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  &:hover {
    border-top: 1px solid ${(props) => props.theme.white};
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
  &:nth-of-type(2) {
    ${(props) => props.contentSize === 1 && `opacity: 0.5`}
  }
  &:nth-of-type(1) {
    ${(props) => props.contentSize === 3 && `opacity: 0.5`}
  }
`;
const RightSidebar = ({ contentSize, setContentSize }) => {
  const increaseContent = () => {
    const element = document.getElementsByClassName("ql-editor")[0];
    if (contentSize === 1) {
      element.style.setProperty("min-height", "20rem", "important");
      element.style.setProperty("min-width", "43rem", "important");
      setContentSize(2);
    } else if (contentSize === 2) {
      element.style.setProperty("min-height", "30rem", "important");
      setContentSize(3);
    }
  };
  const decreaseContent = () => {
    const element = document.getElementsByClassName("ql-editor")[0];
    if (contentSize === 3) {
      element.style.setProperty("min-height", "20rem", "important");
      setContentSize(2);
    } else if (contentSize === 2) {
      element.style.setProperty("min-height", "10rem", "important");
      element.style.setProperty("min-width", "10rem", "important");
      setContentSize(1);
    }
  };
  return (
    <Container>
      <Row onClick={() => increaseContent()} contentSize={contentSize}>
        <FontAwesomeIcon icon={faUpLong} />
        <Label>More Content</Label>
      </Row>
      <Row onClick={() => decreaseContent()} contentSize={contentSize}>
        <FontAwesomeIcon icon={faUpLong} />
        <Label>Less Content</Label>
      </Row>
    </Container>
  );
};

export default RightSidebar;
