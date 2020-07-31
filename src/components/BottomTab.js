import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PopularIcon, HomeIcon, TrendingIcon, SearchIcon } from "./Icons";
import ToggleTheme from "./ToggleTheme";
import { openModal } from "../reducers/modal";
import Modal from "./Modal";
import Search from "./Search";

const BottomTabWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme.tertiaryColor};
  z-index: 3;
  display: none;

  .active svg {
    fill: ${(props) => props.theme.orange};
  }

  svg {
    fill: ${(props) => props.theme.primaryColor};
    cursor: pointer;
  }

  .input-modal-content {
    width: 90%;
    margin: 100px auto;
  }

  @media screen and (max-width: 430px) {
    display: block;
    display: flex;
    justify-content: space-between;
  }
`;

const BottomTab = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  return (
    <BottomTabWrapper>
      <NavLink exact to="/" activeClassName="active">
        <HomeIcon />
      </NavLink>

      <NavLink to="/topanimes" activeClassName="active">
        <TrendingIcon />
      </NavLink>

      <SearchIcon onClick={() => dispatch(openModal())} />
      {modal && (
        <Modal>
          <div className="input-modal-content">
            <Search searchModal={true} />
          </div>
        </Modal>
      )}

      <NavLink to="/popularanimes" activeClassName="active">
        <PopularIcon />
      </NavLink>

      <ToggleTheme />
    </BottomTabWrapper>
  );
};

export default BottomTab;
