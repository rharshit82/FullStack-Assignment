import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAppleWhole } from "@fortawesome/free-solid-svg-icons";
const Container = styled.div`
  & > svg {
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5px;
    height: 2rem;
    width: 2rem;
  }
  position: relative;
  min-height: 43rem;
  width: 45rem;
  background: ${(props) => props.theme.skin};
  border-radius: 0rem 0rem 2rem 2rem;
  outline: 1px solid ${(props) => props.theme.black};

  &::before {
    content: "";
    min-height: 43rem;
    width: 45rem;
    display: block;

    opacity: 0.7;
    z-index: 2;
    ${(props) =>
      props.fruit === "Pears" &&
      `background: url("/assets/fruits/pears.jpg") no-repeat;`}
    ${(props) =>
      props.fruit === "Apple" &&
      `background: url("/assets/fruits/apple.jpg") no-repeat; 
    opacity: 0.6;`}
    ${(props) =>
      props.fruit === "Mango" &&
      `background: url("/assets/fruits/mango.jpg") no-repeat; 
    opacity: 0.6;`}
    ${(props) =>
      props.fruit === "Strawberry" &&
      `background: url("/assets/fruits/strawberry.jpg") no-repeat; 
    opacity: 0.6;`}
    background-size: 100%;
  }
`;
const Title = styled.h1`
  text-align: center;
`;
const TitleInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
  &:focus {
    outline: none;
  }
`;
const Content = styled.h3`
  margin-top: 0.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;
const ContentWrapper = styled.div`
  position: absolute;
  ${(props) => props.fruit === "Pears" && `left: 10%; top: 8rem;`}
  ${(props) => props.fruit === "Apple" && `left: 24%; top: 8rem;`}
  ${(props) => props.fruit === "Mango" && `left: 24%; top: 8rem;`}
  ${(props) => props.fruit === "Strawberry" && `left: 24%; top: 8rem;`}
  ${(props) =>
    (props.contentSize === 2 || props.contentSize === 3) &&
    `left: 1%; top: 0rem;`}
   ${(props) => props.contentSize === 1 && `left: 1%; top: 0rem;`}
`;
const FruitContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 2rem;
  left: 25vw;
  ${(props) =>
    props.contentSize === 3 &&
    ` bottom: 2rem;
  left: 65vw;`}
`;
const Fruit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
  }
  cursor: pointer;
`;
const FruitName = styled.h3`
  margin-left: 0.5rem;
`;
const FruitImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;
const Editor = ({ contentSize, setContentSize }) => {
  const [content, setContent] = useState("");
  const [fruit, setFruit] = useState("Apple");
  return (
    <Container fruit={fruit}>
      <FontAwesomeIcon icon={faXmark} />
      <ContentWrapper fruit={fruit} contentSize={contentSize}>
        <Title>Title</Title>
        <TitleInput />
        <Content>Content</Content>
        <ReactQuill theme='snow' value={content} onChange={setContent} />
      </ContentWrapper>
      <FruitContainer contentSize={contentSize}>
        <Fruit onClick={() => setFruit("Pears")}>
          <FruitImage src='/assets/fruits/peers-icon.svg' />
          <FruitName>Pears</FruitName>
        </Fruit>
        <Fruit onClick={() => setFruit("Apple")}>
          <FontAwesomeIcon icon={faAppleWhole} />
          <FruitName>Apple</FruitName>
        </Fruit>

        <Fruit onClick={() => setFruit("Mango")}>
          <FruitImage src='/assets/fruits/mango-icon.svg' />
          <FruitName>Mango</FruitName>
        </Fruit>
        <Fruit onClick={() => setFruit("Strawberry")}>
          <FruitImage src='/assets/fruits/strawberry-icon.svg' />
          <FruitName>Strawberry</FruitName>
        </Fruit>
      </FruitContainer>
    </Container>
  );
};

export default Editor;
