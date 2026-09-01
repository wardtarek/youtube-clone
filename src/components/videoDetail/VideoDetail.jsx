import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Videos from "../videos/Videos";
import { darkContext } from "../../context/DarkModeContext";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [fullDescription, setFullDescription] = useState(false);
  const { id } = useParams();
  const { darkModeValue } = useContext(darkContext);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet)
    return (
      <Box
        minHeight="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="loader"></Box>
      </Box>
    );
  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box className="content" height="95vh" sx={{ overflow: "auto" }}>
      <Stack direction={{ xs: "column", md: "row" }} gap={2} px={2}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <Box className="player-wrapper">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
            </Box>
            <Typography
              sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
              variant="h5"
              fontWeight="bold"
              p={2}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
              px={2}
              gap={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
                >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: 14, ml: 1, color: "gray" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap={2} alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                backgroundColor: `${darkModeValue ? "#1e1e1e" : "#F0F0F0"}`,
                borderRadius: 2,
              }}
              py={1}
              px={2}
              m={2}
            >
              <Typography
                variant={{ sm: "subtitle2", md: "h6" }}
                sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
              >
                {fullDescription
                  ? description?.split(" ").map((item, index) =>
                      item.includes("http") ? (
                        <a
                          href={item}
                          key={index}
                          target="_blank"
                          style={{ color: "#065fd4" }}
                        >
                          {item}
                        </a>
                      ) : (
                        <span key={index}> {item} </span>
                      )
                    )
                  : description
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")
                      .split(" ")
                      .map((item, index) =>
                        item.includes("http") ? (
                          <a
                            href={item}
                            key={index}
                            target="_blank"
                            style={{ color: "#065fd4" }}
                          >
                            {item}
                          </a>
                        ) : (
                          <span key={index}> {item} </span>
                        )
                      )}
                {!fullDescription ? (
                  <button
                    onClick={() => setFullDescription(true)}
                    style={{
                      backgroundColor: "transparent",
                      color: `${darkModeValue ? "#fff" : "#000"}`,
                      border: 0,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    ...more
                  </button>
                ) : (
                  <button
                    onClick={() => setFullDescription(false)}
                    style={{
                      backgroundColor: "transparent",
                      color: `${darkModeValue ? "#fff" : "#000"}`,
                      border: 0,
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    ...Show less
                  </button>
                )}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          py={{ xs: 1, md: 0 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
