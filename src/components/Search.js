import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../reducers/modal";

const InputWrapper = styled.div`
  input {
    background-color: ${(props) => props.theme.bg};
    border: 1px solid ${(props) => props.theme.bg};
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    color: ${(props) => props.theme.primaryColor};
  }

  .label {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    color: ${(props) => props.theme.white};
  }

  ${(props) =>
    props.searchModal &&
    css`
		input {
		  background-color: ${(props) => props.theme.tertiaryColor};
			border: 1px solid ${(props) => props.theme.tertiaryColor};
			width: 99%;
		  height: 45px;
		}
	}
`}
`;

const Search = ({ searchModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let input;

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      if (input.value.trim()) {
        if (searchModal) {
          dispatch(closeModal());
        }

        history.push(`/search/${input.value.toLowerCase()}`);
        input.value = "";
      }
    }
  };

  return (
    <InputWrapper searchModal={searchModal}>
      {searchModal && <span className="label">Search</span>}
      <input ref={(node) => (input = node)} onKeyDown={handleSearch} />
    </InputWrapper>
  );
};

export default Search;
