import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const InputWrapper = styled.div`
  input {
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.bg};
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    color: ${(props) => props.theme.primaryColor};
  }

  @media screen and (max-width: 500px) {
    .input {
      width: 99%;
    }
  }
`;

const Search = () => {
  const history = useHistory();
  let input;

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      if (input.value.trim()) {
        history.push(`/search/${input.value.toLowerCase()}`);
        input.value = "";
      }
    }
  };

  return (
    <InputWrapper>
      <input ref={(node) => (input = node)} onKeyDown={handleSearch} />
    </InputWrapper>
  );
};

export default Search;
