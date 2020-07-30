import React from "react";
import styled from "styled-components";
import AnimeNotFound from "../assets/animenotfound.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h3 {
    color: ${(props) => props.theme.secondaryColor};
    text-align: center;
    position: relative;
    top: -40px;
  }

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }

  @media screen and (max-width: 385px) {
    img {
      width: 350px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <img src={AnimeNotFound} alt="Not found" />
      <h3>The anime you are looking for is not found or</h3>
      <h3>it may have been removed.</h3>
    </Wrapper>
  );
};

export default NotFound;
