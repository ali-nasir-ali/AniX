import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import Container from "../styles/Container";
import AnimeGrid from "../styles/AnimeGrid";
import { getTopAnimes } from "../reducers/topanimes";
import AnimeCard from "../components/AnimeCard";
import Skeleton from "../skeletons/GridSkeleton";

const Home = () => {
  const { animes, isFetching } = useSelector((state) => state.topanimes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAnimes());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  return (
    <Container>
      <Helmet>
        <title>Hall of Fame &bull; AniX</title>
      </Helmet>

      <h2>Hall of Fame</h2>

      <AnimeGrid>
        {animes.map((anime, idx) => (
          <AnimeCard key={anime.slug} anime={anime} idx={idx} />
        ))}
      </AnimeGrid>
    </Container>
  );
};

export default Home;
