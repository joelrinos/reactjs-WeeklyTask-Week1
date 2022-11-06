import React from "react";
import { Container, Box, Toolbar, Typography } from "@mui/material/";

const AppFooter = () => {
  return (
    <>
      <Toolbar />
      <Container>
        <Box mt={2}>
          <Typography variant="footer" component="p">
            Submitted by: Joel R. Rinos
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AppFooter;
