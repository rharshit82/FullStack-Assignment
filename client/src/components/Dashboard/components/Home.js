import React from "react";
import styled, { keyframes } from "styled-components/macro";

const slide = keyframes`
    0% {
        transform: translateX(0);
    }
   
    100% {
        transform: translateX(25rem);
    }
`;

const Container = styled.div`
  overflow: hidden;
  margin-left: 1rem;
  position: relative;
  min-height: 43rem;
  display: flex;
  flex-direction: row;
`;
const HomeContent = styled.div`
  width: 50%;
  padding: 5rem;
`;
const NotesImage = styled.img``;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  & span{
    color: ${props => props.theme.golden};

  }
`;
const Description = styled.p``;
const DiscordIcon = styled.img``;
const DiscordContainer = styled.div`
  background-color: ${(props) => props.theme.darkBlue};
  height: 3rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 2rem;
  margin: 3rem auto 0 auto;
  cursor: pointer;
`;
const DiscordText = styled.p`
  margin-top: 1rem;
  text-align: center;
`;
const NoteRow = styled.div``;
const NoteImage = styled.img`
  animation: ${slide} 10s linear infinite;
  height: 2rem;
  margin-bottom: 1rem;
`;
const Home = () => {
  return (
    <Container>
      <HomeContent>
        <Title>
          Fruitify your Thoughts with Sticky Notes for <span>Every Flavor!</span>
        </Title>
        <NoteRow>
          <NoteImage src='/assets/notebook.svg' />
        </NoteRow>
        <Description>
          Get ready to unleash your creativity with our unique sticky note web
          app that caters to all your fruity thoughts. With notepads specially
          designed for apple, pears, strawberry and more, you can now organize
          your ideas and inspirations in a fun and colorful way.
          <br />
          <br />
          Join our community of fruit enthusiasts today and take your
          note-taking to the next level!
        </Description>
        <DiscordContainer>
          <DiscordIcon src='/assets/discord.svg' />
        </DiscordContainer>
        <DiscordText>Join our Discord community</DiscordText>
      </HomeContent>
      <NotesImage src='/assets/notes-making.svg' />
    </Container>
  );
};

export default Home;
