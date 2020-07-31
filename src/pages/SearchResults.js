import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Container from "../styles/Container";
import useSearch from "../hooks/useSearch";
import AnimeGrid from "../styles/AnimeGrid";
import AnimeCard from "../components/AnimeCard";
import Skeleton from "../skeletons/GridSkeleton";

const SearchResults = () => {
  const { term } = useParams();
  const animes = useSearch(term);

  if (!animes?.length) {
    return <Skeleton />;
  }

  return (
    <Container>
      <Helmet>
        <title>{term} &bull; AniX</title>
      </Helmet>
      <h2>Search Results</h2>
      <AnimeGrid>
        {animes.map((anime, idx) => (
          <AnimeCard key={anime.slug} anime={anime} idx={idx} />
        ))}
      </AnimeGrid>
    </Container>
  );
};

export default SearchResults;
