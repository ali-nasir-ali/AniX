import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding-top: 1rem;
  }

  .thumb img {
    height: 160px;
    width: 230px;
    border-radius: 4px;
    object-fit: cover;
  }

  @media screen and (max-width: 1030px) {
    .thumb img {
      width: 200px;
      height: 130px;
    }
  }

  @media screen and (max-width: 915px) {
    .thumb img {
      width: 170px;
      height: 100px;
    }
  }

  @media screen and (max-width: 786px) {
    .thumb img {
      width: 150px;
      height: 80px;
    }
  }

  @media screen and (max-width: 760px) {
    .thumb img {
      width: 180px;
      height: 110px;
    }
  }

  @media screen and (max-width: 600px) {
    .thumb img {
      width: 150px;
      height: 140px;
    }
  }

  @media screen and (max-width: 600px) {
    .thumb img {
      width: 130px;
      height: 110px;
    }
  }

  @media screen and (max-width: 445px) {
    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }

    .thumb img {
      width: 180px;
      height: 150px;
    }
  }

  @media screen and (max-width: 400px) {
    .thumb img {
      width: 170px;
      height: 140px;
    }
  }

  @media screen and (max-width: 380px) {
    .thumb img {
      width: 150px;
      height: 120px;
    }
  }
`;

const Gallery = ({ episodes }) => {
  return (
    <Wrapper>
      <h3>Gallery</h3>
      <div className="gallery">
        {episodes?.slice(0, 6)?.map((episode) => (
          <div className="thumb" key={episode.title}>
            <img src={episode.thumbnail} alt={episode.title.romaji} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Gallery;
