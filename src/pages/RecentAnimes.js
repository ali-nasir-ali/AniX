import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import Container from "../styles/Container";
import AnimeGrid from "../styles/AnimeGrid";
import { getRecentAnimes } from "../reducers/recentanimes";
import AnimeCard from "../components/AnimeCard";
import Skeleton from "../skeletons/GridSkeleton";

const Home = () => {
  const { animes, isFetching } = useSelector((state) => state.recentanimes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecentAnimes());
  }, [dispatch]);

  if (isFetching) {
		return <Skeleton />
  }

  return (
    <Container>
			<Helmet>
				<title>React Animes &bull; AniX</title>
			</Helmet>

      <h2>Recent Animes</h2>

      <AnimeGrid>
        {animes.map((anime, idx) => (
          <AnimeCard key={anime.slug} anime={anime} idx={idx}/>
        ))}
      </AnimeGrid>
    </Container>
  );
};

export default Home;
