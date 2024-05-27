import { Box } from "@mui/material";
import React from "react";
import NavBar from "../../components/navbar/NavBar";

const HomeLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default HomeLayout;
