import React from "react";
import styled from "styled-components";
import { getFormat, titleCase, months } from "../utils";

const AnimeBarWrapper = styled.div`
  padding: 1rem;
  background: ${(props) => props.theme.tertiaryColor};
  border-radius: 4px;

  .item {
    margin-bottom: 0.6rem;
  }

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .item h4 {
    font-weight: 500;
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const AnimeBar = ({ anime }) => {
  return (
    <AnimeBarWrapper>
      <div className="item">
        <h4>Format</h4>
        <span>{getFormat(anime?.episodesList?.length)}</span>
      </div>

      {anime?.format === "TV" && (
        <div className="item">
          <h4>Episodes</h4>
          <span>{anime?.episodes}</span>
        </div>
      )}

      {anime?.format === "TV" ||
        (anime?.format === "MOVIE" && (
          <div className="item">
            <h4>{anime?.format === "TV" ? "Episode Duration" : "Duration"}</h4>
            <span>{anime?.duration} mins</span>
          </div>
        ))}

      {anime?.status && (
        <div className="item">
          <h4>Status</h4>
          <span>{titleCase(anime?.status)}</span>
        </div>
      )}

      <div className="item">
        <h4>Start Date</h4>
        <span>
          {months[anime?.startDate?.month]} {anime?.startDate?.day},{" "}
          {anime?.startDate?.year}
        </span>
      </div>

      {anime?.status === "Finished" && (
        <div className="item">
          <h4>End Date</h4>
          <span>
            {months[anime?.endDate?.month]} {anime?.endDate?.day},{" "}
            {anime?.endDate?.year}
          </span>
        </div>
      )}

      <div className="item">
        <h4>English</h4>
        <span>{anime?.title?.english}</span>
      </div>

      <div className="item">
        <h4>Romaji</h4>
        <span>{anime?.title?.romaji}</span>
      </div>

      <div className="item">
        <h4>Native</h4>
        <span>{anime?.title?.native}</span>
      </div>

      <div className="item">
        <h4>Genres</h4>
        <span>{anime?.genres?.slice(0, 2)?.join(", ")}</span>
      </div>
    </AnimeBarWrapper>
  );
};

export default AnimeBar;
