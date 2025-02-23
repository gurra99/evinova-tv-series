import React from "react";
import { HeaderContainer, Nav } from "./header.styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <NavLink to={"/"} data-cy="home-link">
              Home
            </NavLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
