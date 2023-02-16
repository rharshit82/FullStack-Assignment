import React from "react";
import styled from "styled-components/macro";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  background: ${(props) => props.theme.purple};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 0rem;
  transition: all 1s ease-in-out;
`;
const Logo = styled.img`
  margin-left: 1rem;
  height: 3rem;
  width: 3rem;
  margin-right: 0.5rem;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.white};
`;

const ProfileImage = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.white};
`;
const ProfileWrapper = styled.div`
  margin-left: auto;
  margin-right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    cursor: pointer;
    color: ${(props) => props.theme.white};
    height: 2rem;
    width: 2rem;
    margin-left: 1rem;
  }
`;

const Header = ({setIsRightSidebarOpen}) => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <Container>
      <Logo src={"/assets/svg/logo-no-background.svg"} alt='logo' />
      <H1>Sticky Notes!</H1>
      <ProfileWrapper>
        <ProfileImage src={user.picture} alt={user.name} />
        <FontAwesomeIcon icon={faBars} onClick={() => setIsRightSidebarOpen((open) => !open)} />
      </ProfileWrapper>
    </Container>
  );
};

export default Header;
