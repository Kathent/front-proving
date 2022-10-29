import React from "react";
import Box from "@material-ui/core/Box";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";

function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" disableGutters style={{height: '100vh'}}>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh", display:'inline'}}
        >aaaaaaaaaaaaaaaaaa</Typography>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh", display:'inline' }}
        >bbbbbbbbbbbbbbbbbb</Typography>
      </Container>
    </React.Fragment>
  );
}

function BoxPage() {
  return (
    <Box component="span" m={1}>
      <Button>Click me</Button>
      <SimpleContainer/>
    </Box>
  );
}

export default BoxPage;
