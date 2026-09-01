import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "../videoCard/VideoCard";
import ChannelCard from "../channelCard/ChannelCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos?.map(
        (item, idx) =>
          (item?.id?.videoId || item?.id?.channelId) && (
            <Box key={idx}>
              {item?.id?.videoId && <VideoCard video={item} />}
              {item?.id?.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          )
      )}
    </Stack>
  );
};

export default Videos;
