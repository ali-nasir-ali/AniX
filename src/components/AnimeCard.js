import React from "react";
import { Link } from "react-router-dom";
import AnimeTooltip from "./AnimeTooltip";
import { rightHover } from "../utils";

const AnimeCard = ({ anime, idx }) => {
  return (
    <Link to={`/${anime.collection}/${anime.slug}`} className="anime">
      <img
        className="poster"
        src={anime?.coverImage?.extraLarge}
        alt={anime?.title?.english}
      />
      <span>
        {anime?.title?.romaji?.length > 22
          ? anime?.title?.romaji.substr(0, 22) + "..."
          : anime?.title?.romaji}
      </span>
      <div className="anime-tooltip">
        <AnimeTooltip anime={anime} rightHover={rightHover.includes(idx + 1)} />
      </div>
    </Link>
  );
};

export default AnimeCard;
