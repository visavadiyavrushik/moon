import { Box, Container, styled } from "@mui/material";
import React from "react";

const AuthBox = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Authlayout = ({ children }) => {
  return (
    <Container>
      <AuthBox>{children}</AuthBox>
    </Container>
  );
};

export default Authlayout;
