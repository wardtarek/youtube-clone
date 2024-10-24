import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "#000",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Box
        sx={{
          position: { md: "absolute" },
          top: "50%",
          left: "50%",
          transform: { md: "translate(-50%,-50%)" },
        }}
      >
        <SearchBar />
      </Box>
    </Stack>
  );
};

export default Navbar;
