import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ToggleTheme from "./ToggleTheme";
import Search from "./Search";
import Logo from "../assets/logo.png";

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.tertiaryColor};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }

  .nav-active {
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 65px;
    height: 65px;
    height: 60px;
    position: relative;
    top: 5px;
  }

  nav ul {
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  nav ul li {
    margin-left: 2rem;
    cursor: pointer;
  }

  nav ul li:hover {
    font-weight: 500;
  }

  svg {
    position: relative;
    top: 4px;
    fill: ${(props) => props.theme.primaryColor};
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 1093px) {
    .container {
      width: 95%;
    }
  }

  @media screen and (max-width: 700px) {
    input {
      width: 170px;
    }
  }

  @media screen and (max-width: 600px) {
    input {
      display: none;
    }
  }

  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Search />
        <nav>
          <ul>
            <li>
              <NavLink exact activeClassName="nav-active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/topanimes">
                Hall of Fame
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" to="/popularanimes">
                Popular
              </NavLink>
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
