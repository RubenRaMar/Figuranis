import React from "react";
import { NavLink } from "react-router-dom";
import NavegationMenuStyled from "./NavegationMenuStyled";

const NavegationMenu = (): React.ReactElement => {
  return (
    <NavegationMenuStyled>
      <ul className="navbar">
        <li className="navbar_list">
          <NavLink to={"/figures"} className="navbar_list_icon">
            <img
              src="/images/allfigures.svg"
              width="60"
              height="64.5"
              alt="All figures icon"
            />
            <span>All</span>
          </NavLink>
        </li>
        <li className="navbar_list">
          <button className="navbar_list_icon">
            <img
              src="/images/pendingfigures.svg"
              width="60"
              height="64.5"
              alt="Filter pending figures icon"
            />
            <span>Pending</span>
          </button>
        </li>
        <li className="navbar_list">
          <NavLink to={"/addFigures"} className="navbar_list_icon">
            <img
              src="/images/addfigure.svg"
              width="60"
              height="64.5"
              alt="Add figures icon"
            />
            <span>Add</span>
          </NavLink>
        </li>
      </ul>
    </NavegationMenuStyled>
  );
};

export default NavegationMenu;
