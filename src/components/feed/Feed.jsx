import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SideBar from "../sideBar/SideBar";
import Videos from "../videos/Videos";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { darkContext } from "../../context/DarkModeContext";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState([]);
  const { darkModeValue } = useContext(darkContext);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #6d6d6d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "gray" }}
        >
          Copyright 2022 JSM Media <CopyrightIcon sx={{ fontSize: 14 }} />
        </Typography>
      </Box>
      <Box className="content" p={2} sx={{ height: "90vh", flex: 2, overflowY: "auto" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
        >
          {selectedCategory == "Home" ? "New" : selectedCategory}{" "}
          <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
