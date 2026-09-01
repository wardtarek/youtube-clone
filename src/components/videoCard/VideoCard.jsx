import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../../utils/constants";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { darkContext } from "../../context/DarkModeContext";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  const { darkModeValue } = useContext(darkContext);
  return (
    <Card
      sx={{
        width: { xs: "300px", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 3,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{
          backgroundColor: `${darkModeValue ? "#1e1e1e" : "#F0F0F0"}`,
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: `${darkModeValue ? "#fff" : "#000"}` }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, ml: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
