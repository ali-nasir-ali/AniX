import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  margin-top: 1rem;

  .anime {
    position: relative;
  }

  .anime:hover .anime-tooltip {
    display: block;
  }

  .anime .anime-tooltip:hover {
    display: none;
  }

  img.poster {
    width: 185px;
    height: 265px;
    border-radius: 4px;
    object-fit: cover;
    display: block;
    margin-bottom: 0.5rem;
  }

  img + span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .anime-tooltip {
    display: none;
  }

  @media screen and (max-width: 1093px) {
    grid-template-columns: repeat(4, 1fr);

    .anime:hover .anime-tooltip {
      display: none;
    }
  }

  @media screen and (max-width: 830px) {
    img.poster {
      width: 145px;
      height: 205px;
    }
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: repeat(3, 1fr);

    img.poster {
      width: 180px;
      height: 230px;
    }
  }

  @media screen and (max-width: 600px) {
    img.poster {
      width: 150px;
      height: 200px;
    }
  }

  @media screen and (max-width: 515px) {
    img.poster {
      width: 130px;
      height: 180px;
    }
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(3, 1fr);

    img.poster {
      width: 120px;
      height: 160px;
    }

    img + span {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);

    img.poster {
      width: 175px;
      height: 240px;
    }

    img + span {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 385px) {
    img.poster {
      width: 160px;
      height: 220px;
    }
  }
`;
