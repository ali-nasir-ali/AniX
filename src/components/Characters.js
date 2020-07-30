import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2rem;

  .characters {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    padding-top: 1.5rem;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
  }

  .character {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .character span {
    color: ${(props) => props.theme.secondaryColor};
    padding-top: 0.8rem;
  }

  @media screen and (max-width: 1093px) {
    .characters {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 995px) {
    .avatar {
      width: 80px;
      height: 80px;
    }
  }

  @media screen and (max-width: 560px) {
    .avatar {
      width: 60px;
      height: 60px;
    }
  }

  @media screen and (max-width: 400px) {
    .characters {
      grid-template-columns: repeat(3, 1fr);
    }

    .avatar {
      width: 88px;
      height: 88px;
    }
  }
`;

const Characters = ({ characters }) => {
  return (
    <Wrapper>
      <h3>Characters</h3>
      <div className="characters">
        {characters
          ?.filter((character) => character.name.first)
          .slice(0, 10)
          ?.map((character) => (
            <div className="character" key={character.name.first}>
              <img
                className="avatar"
                src={character.image.large}
                alt={character.name.first}
              />
              <span>
                {character.name.first.length > 7
                  ? character.name.first.substr(0, 6) + "..."
                  : character.name.first}
              </span>
            </div>
          ))}
      </div>
    </Wrapper>
  );
};

export default Characters;
