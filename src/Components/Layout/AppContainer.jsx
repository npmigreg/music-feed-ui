import { Container } from "@mui/material";

const AppContainer = ({ children }) => {
  return (
    <Container className="my-2" width="sm">
      {children}
    </Container>
  );
};

export default AppContainer;
