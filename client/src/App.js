import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "./components/Loader/Loader";
import styled from "styled-components/macro";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "styled-components/macro";
import { theme } from "./Colors";
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;
const LoaderContainer = styled.div`
  height: 100%;
  min-height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading]);

  if (!isAuthenticated || isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Dashboard />
      </Container>
    </ThemeProvider>
  );
}

export default App;
