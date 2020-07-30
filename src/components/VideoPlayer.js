import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src, pressed }) => {
  const { anime } = useSelector((state) => state.anime);
  let playerRef;

  useEffect(() => {
    const player = videojs(playerRef, {
      controls: true,
    });

    player.poster(anime?.bannerImage);

    if (src) {
      player.src({
        src,
        type: "video/mp4",
      });
      player.play();
    } else if (src === "" && pressed) {
      player.reset();
    }
  });

  return (
    <div data-vjs-player>
      <video
        ref={(node) => (playerRef = node)}
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
};

export default VideoPlayer;
