import React from "react";
import { NavLink } from "react-router-dom";
import NavegationMenuStyled from "./NavegationMenuStyled";
import pathList from "../../utils/pathList/pathList";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink
            aria-label="All figures icon"
            to={`${pathList.figures}`}
            className="navbar__icon"
          >
            <img
              src={
                window.location.pathname === `${pathList.figures}`
                  ? "/images/allfiguresblue.svg"
                  : "/images/allfigures.svg"
              }
              width="60"
              height="65"
              alt="A showcase full of figures"
              loading="lazy"
            />
            <span>All</span>
          </NavLink>
        </li>
        <li>
          <button aria-label="Pending figures icon" className="navbar__icon">
            <img
              src="/images/pendingfigures.svg"
              width="60"
              height="65"
              alt="A showcase with a shopping list with figurines"
              loading="lazy"
            />
            <span>Pending</span>
          </button>
        </li>
        <li>
          <NavLink
            aria-label="Add figures icon"
            to={pathList.addFigures}
            className="navbar__icon"
          >
            <img
              src="/images/addfigure.svg"
              width="60"
              height="65"
              alt="A showcase case with an addition symbol on the inside"
              loading="lazy"
            />
            <span>Add</span>
          </NavLink>
        </li>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
