import React from "react";
import styled, { css, keyframes } from "styled-components";
import { getFormat, getDurationInHours } from "../utils";

export const popIn = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 200px;
  z-index: 1;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.tertiaryColor};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 29px rgba(49, 54, 68, 0.25);
  // height: 150px;
  min-width: 290px;
  animation: ${popIn} 0.3s ease-in-out;

  .title-trailer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .genres {
    margin-top: 1rem;
  }

  .anime-info {
    font-size: 0.9rem;
    padding-top: 0.5rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .badge {
    background-color: ${(props) => props.theme.orange};
    color: ${(props) => props.theme.white};
    padding: 0.3rem 0.7rem;
    border-radius: 20px;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    margin-bottom: auto;
  }

  ${(props) =>
    props.rightHover &&
    css`
      left: -310px;
      width: 290px;
    `}
`;

const AnimeTooltip = ({ anime, rightHover = false }) => {
  return (
    <Wrapper rightHover={rightHover}>
      <h4>{anime?.title?.romaji}</h4>

      <div className="anime-info">
        <span>{getFormat(anime?.episodesList?.length)}</span>{" "}
        {anime?.episodesList?.length && anime?.episodes > 1 && (
          <>
            <span>&bull;</span> <span>{anime?.episodes} Episodes</span>
          </>
        )}
        {anime?.episodesList?.length === 1 && anime?.duration && (
          <>
            <span>&bull;</span>{" "}
            <span>{getDurationInHours(anime?.duration)}</span>
          </>
        )}
      </div>

      <div className="genres">
        {anime?.genres?.slice(0, 2).map((genre) => (
          <span key={genre} className="badge">
            {genre}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

export default AnimeTooltip;
