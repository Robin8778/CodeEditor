import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
const Container = styled(AppBar)`
  background: #060606;
  height: 9vh;
`;

const Header = () => {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/RYE-R-Logo.png?20170824033551";
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
