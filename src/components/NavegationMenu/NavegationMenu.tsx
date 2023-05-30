import React from "react";
import { NavLink } from "react-router-dom";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink
            aria-label="All figures icon"
            to="/figures"
            className="navbar__icon"
          >
            <img
              src="/images/allfigures.svg"
              width="60"
              height="64.5"
              alt="A showcase full of figures"
            />
            <span>All</span>
          </NavLink>
        </li>
        <li>
          <button aria-label="Pending figures icon" className="navbar__icon">
            <img
              src="/images/pendingfigures.svg"
              width="60"
              height="64.5"
              alt="A showcase with a shopping list with figurines"
            />
            <span>Pending</span>
          </button>
        </li>
        <li>
          <NavLink
            aria-label="Add figures icon"
            to="/addFigures"
            className="navbar__icon"
          >
            <img
              src="/images/addfigure.svg"
              width="60"
              height="64.5"
              alt="A showcase case with an addition symbol on the inside"
            />
            <span>Add</span>
          </NavLink>
        </li>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
