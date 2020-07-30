import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AnimeBar from "../components/AnimeBar";
import Gallery from "../components/Gallery";
import Characters from "../components/Characters";
import Watch from "../components/Watch";
import { clearAnime, getAnime } from "../reducers/anime";
import Skeleton from "../skeletons/AnimeSkeleton";
import NoBanner from "../assets/nobanner.png";
import NotFound from "../components/NotFound";

export const AnimeWrapper = styled.div`
  padding-bottom: 90px;

  .banner {
    width: 100%;
    height: 340px;
    object-fit: cover;
    border: 0;
    margin: 0;
    display: block;
  }

  .info-tab {
    background-color: ${(props) => props.theme.tertiaryColor};
    margin-bottom: 1.2rem;
  }

  .info-tab-content {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 0.8rem;
  }

  .info-tab-content .poster {
    width: 215px;
    height: 305px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: -125px;
    box-shadow: 0 0 29px rgba(49, 54, 68, 0.25);
  }

  .info-tab-data {
    padding: 1rem 1rem 0 1rem;
    margin: 1.4rem;
    margin-top: -5px;
  }

  .info-tab-data .desc {
    color: ${(props) => props.theme.secondaryColor};
    padding-top: 0.5rem;
  }

  .tabs {
    margin-top: 1rem;
    position: relative;
    top: 1.2rem;
  }

  .tabs span {
    margin-right: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    cursor: pointer;
  }

  .active-tab {
    color: ${(props) => props.theme.blue};
  }

  .bar-tab {
    display: grid;
    grid-template-columns: 20% minmax(0, 1fr);
    grid-gap: 2rem;
    width: 80%;
    margin: 0 auto;
    border-radius: 4px;
  }

  .trailer {
    padding-bottom: 0.5rem;
  }

  .trailer + iframe {
    width: 99%;
    height: 400px;
    border-radius: 4px;
  }

  @media screen and (max-width: 1093px) {
    .info-tab-content,
    .bar-tab {
      width: 95%;
    }
  }

  @media screen and (max-width: 1030px) {
    .bar-tab {
      grid-template-columns: 24% minmax(0, 1fr);
    }
  }

  @media screen and (max-width: 905px) {
    .info-tab-content .poster {
      margin-top: -100px;
    }
  }

  @media screen and (max-width: 760px) {
    .info-tab-content .poster {
      margin-top: 0;
      margin-top: 1.4rem;
    }

    .info-tab-content {
      margin: 0;
      margin: auto;
    }

    .bar-tab {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 700px) {
    .banner {
      height: 200px;
    }

    .info-tab-content {
      padding: 0.5rem;
      flex-direction: column;
      width: 99%;
    }

    .info-tab-content .poster {
      margin-top: -135px;
      width: 120px;
      height: 170px;
    }

    .info-tab-data {
      padding: 0;
      padding-top: 1rem;
      margin: 0;
    }

    .tabs {
      top: 0;
    }
  }

  @media screen and (max-width: 500px) {
    .trailer + iframe {
      height: 200px;
    }
  }
`;

const Anime = () => {
  const { slug, collection } = useParams();

  const { anime, isFetching } = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  const [tab, setTab] = useState("overview");
  const getOverview = () => setTab("overview");
  const getWatch = () => setTab("watch");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAnime({ collection, slug }));

    return () => {
      dispatch(clearAnime());
    };
  }, [slug, collection, dispatch]);

  if (isFetching) {
    return <Skeleton />;
  }

  if (!isFetching && !anime?.slug) {
    return <NotFound />;
  }

  return (
    <AnimeWrapper>
      <Helmet>
        <title>
          {anime?.title?.english ? anime?.title?.english : anime?.title?.romaji}
        </title>
      </Helmet>

      <img
        className="banner"
        src={anime?.bannerImage ? anime.bannerImage : NoBanner}
        alt={anime?.title?.english}
      />

      <div className="info-tab">
        <div className="info-tab-content">
          <img
            className="poster"
            src={anime?.coverImage?.extraLarge}
            alt={anime?.title?.english}
          />

          <div className="info-tab-data">
            <h2>{anime?.title?.romaji}</h2>
            <div
              className="desc"
              dangerouslySetInnerHTML={{
                __html:
                  anime?.description?.length > 330
                    ? anime?.description.substr(0, 330) + "..."
                    : anime?.description,
              }}
            />
            <div className="tabs">
              <span
                style={{ color: tab === "overview" ? "#3AB4F2" : "" }}
                onClick={getOverview}
              >
                Overview
              </span>
              <span
                style={{ color: tab === "watch" ? "#3AB4F2" : "" }}
                onClick={getWatch}
              >
                Watch
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bar-tab">
        <AnimeBar anime={anime} />

        <div>
          {tab === "overview" && anime?.streamingEpisodes?.length > 1 && (
            <Gallery episodes={anime?.streamingEpisodes} />
          )}

          {tab === "overview" && anime?.characters?.nodes?.length > 1 && (
            <Characters characters={anime?.characters?.nodes} />
          )}

          {tab === "overview" && anime?.trailer?.id && (
            <>
              <h3 className="trailer">Trailer</h3>

              <iframe
                title={anime?.trailer?.id}
                src={`https://www.youtube.com/embed/${anime?.trailer?.id}`}
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </>
          )}

          {tab === "watch" && <Watch episodes={anime?.episodesList} />}
        </div>
      </div>
    </AnimeWrapper>
  );
};

export default Anime;
