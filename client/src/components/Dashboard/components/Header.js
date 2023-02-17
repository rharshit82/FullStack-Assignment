import React from "react";
import styled from "styled-components/macro";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSwit } from "@fortawesome/free-solid-svg-icons";

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
  cursor: pointer;
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
const Switch = styled.img`
  height: 3rem;
  margin-right: 1rem;
`;
const Header = ({currentTheme, changeTheme}) => {
  const { user, logout } = useAuth0();
  return (
    <Container>
      <Logo src={"/assets/svg/logo-no-background.svg"} alt='logo' />
      <H1>Sticky Notes!</H1>
      <ProfileWrapper>
        <Switch src='/assets/switch.svg' onClick={changeTheme} />
        <ProfileImage
          src={user.picture}
          alt={user.name}
          onClick={() => logout()}
        />
        <FontAwesomeIcon icon={faBars} />
      </ProfileWrapper>
    </Container>
  );
};

export default Header;
