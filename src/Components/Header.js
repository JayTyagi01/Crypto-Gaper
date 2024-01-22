import React from "react";
import {AppBar,Container,Toolbar,Typography} from "@material-ui/core"
function Header() {
  return (
  <AppBar color="transparent" position="static">
    <Container>
      <Toolbar>
        <Typography>Crypto Gaper</Typography>
      </Toolbar>
    </Container>

  </AppBar>
  ) 
};

export default Header;
