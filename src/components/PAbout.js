import React from "react";
import HOCBOXComp from "./HOCBOXComp";
import { Container, Toolbar, Box, Typography } from "@mui/material/";

const PAbout = () => {
  return (
    <Container>
      <Toolbar />
      <Box mt={2}>
        <Typography variant="h4" component="p">
          Random Background
        </Typography>
        <HOCBOXComp />
        <HOCBOXComp />
      </Box>
    </Container>
  );
};

export default PAbout;
