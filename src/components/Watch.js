import React, { useState } from "react";
import styled from "styled-components";
import db from "../firebase";
import VideoPlayer from "./VideoPlayer";
import { fetchFromScraper } from "../utils";

const WatchWrapper = styled.div`
  h3 {
    margin-top: 1.5rem;
    padding-bottom: 0.7rem;
  }

  .episodes {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
  }

  .episode:nth-child(${(props) => props.episode}) {
    background: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
  }

  .episode {
    display: block;
    background-color: ${(props) => props.theme.tertiaryColor};
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }

  .episode:hover {
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.bs1};
  }

  @media screen and (max-width: 630px) {
    .episodes {
      grid-template-columns: repeat(10, 1fr);
    }
  }

  @media screen and (max-width: 535px) {
    .episodes {
      grid-template-columns: repeat(8, 1fr);
    }
  }

  @media screen and (max-width: 415px) {
    .episodes {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;

const Watch = ({ episodes }) => {
  const [src, setSrc] = useState("");
  const [episode, setEpisode] = useState(0);
  const [pressed, setPressed] = useState(false);

  const getEpisode = (url, episode) => {
    setSrc("");
    setPressed(true);
    setEpisode(episode);

    const temp = url.split("/");
    const episodeId = temp[temp.length - 2];

    db.collection("streams")
      .doc(episodeId)
      .onSnapshot(async (doc) => {
        if (doc.exists) {
          const data = doc.data();
          if (data.stream_link) {
            setSrc(data.stream_link);
          }
        } else {
          const body = `project=default&spider=getstream&url=${url}`;
          fetchFromScraper(body);
        }
      });
  };

  return (
    <WatchWrapper episode={episode}>
      <VideoPlayer src={src} pressed={pressed} />

      <h3>Episodes</h3>

      <div className="episodes">
        {episodes?.map((episode, idx) => (
          <span
            key={episode.episode}
            onClick={() => getEpisode(episode.video_link, idx + 1)}
            className="episode"
          >
            {episode.episode}
          </span>
        ))}
      </div>
    </WatchWrapper>
  );
};

export default Watch;
