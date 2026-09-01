import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Videos from "../videos/Videos";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { darkContext } from "../../context/DarkModeContext";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const { darkModeValue } = useContext(darkContext);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
    className="content"
      p={2}
      sx={{ height: "90vh", flex: 2, overflowY: "auto" }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
      >
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
