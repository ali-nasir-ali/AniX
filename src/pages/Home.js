import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Container from "../styles/Container";
import AnimeGrid from "../styles/AnimeGrid";
import { getRecommendedAnimes } from "../reducers/recommended";
import AnimeCard from "../components/AnimeCard";
import Skeleton from "../skeletons/GridSkeleton";

const Home = () => {
  const { animes, isFetching } = useSelector((state) => state.recommended);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendedAnimes());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <Container>
      <Helmet>
        <title>Recommended Animes &bull; AniX</title>
      </Helmet>

      <h2>Recommended</h2>

      <AnimeGrid>
        {animes.map((anime, idx) => (
          <AnimeCard key={anime.slug} anime={anime} idx={idx} />
        ))}
      </AnimeGrid>
    </Container>
  );
};

export default Home;
