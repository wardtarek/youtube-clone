import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { darkContext } from "../../context/DarkModeContext";
import Navbar from "../navbar/Navbar";
import Feed from "../feed/Feed";
import VideoDetail from "../videoDetail/VideoDetail";
import ChannelDetail from "../channelDetail/ChannelDetail";
import SearchFeed from "../searchFeed/SearchFeed";

const Layout = () => {
  const { darkModeValue } = useContext(darkContext);
  return (
    <Box
      sx={{
        backgroundColor: `${darkModeValue ? "#000" : "#fff"}`,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
};

export default Layout;
