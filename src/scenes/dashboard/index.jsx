import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

function index() {
  return (
    <Box
      m={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Header title={"DASHBOARD"} subtitle={"Welcome to your Dashboard"} />{" "}
    </Box>
  );
}

export default index;
