import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import NavegationMenuStyled from "./NavegationMenuStyled";
import pathList from "../../utils/pathList/pathList";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadFiguresIsPurchasedActionCreator } from "../../store/figures/figureSlice";
import { paginationActionCreator } from "../../store/ui/uiSlice";

const NavegationMenu = (): React.ReactElement => {
  const isPurchasedFilter = useAppSelector(
    (store) => store.figure.isPurchasedFilter
  );
  const dispatch = useAppDispatch();
  const location = useLocation();

  const hasPurchasedFilter = isPurchasedFilter?.toString();

  const handleFiguresisPurchased = async () => {
    dispatch(loadFiguresIsPurchasedActionCreator());

    dispatch(paginationActionCreator(1));
  };

  return (
    <NavegationMenuStyled className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink
            aria-label="All figures icon"
            to={`${pathList.figures}`}
            className={
              location.pathname === pathList.figures
                ? "navbar__icon actived"
                : "navbar__icon"
            }
          >
            <img
              src={
                location.pathname === `${pathList.figures}`
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
          {location.pathname === pathList.figures && (
            <button
              onClick={handleFiguresisPurchased}
              aria-label="Pending figures icon"
              className="navbar__icon"
            >
              <img
                src={
                  isPurchasedFilter === undefined
                    ? "/images/pendingfigures.svg"
                    : isPurchasedFilter
                    ? "/images/pendingfiguresorangesvg.svg"
                    : "/images/pendingfiguresgreen.svg"
                }
                width="60"
                height="65"
                alt="A showcase with a shopping list with figurines"
                loading="lazy"
              />
              <span
                className={
                  isPurchasedFilter === undefined
                    ? ""
                    : isPurchasedFilter
                    ? "pending"
                    : "purchased"
                }
              >
                {hasPurchasedFilter && hasPurchasedFilter === "false"
                  ? "Purchased"
                  : "Pending"}
              </span>
            </button>
          )}
        </li>
        <li>
          <NavLink
            aria-label={`Add figures icon ${
              location.pathname === "/add-figure" ? "blue" : ""
            }`}
            to={pathList.addFigure}
            className={
              location.pathname === pathList.addFigure
                ? "navbar__icon actived"
                : "navbar__icon"
            }
          >
            <img
              src={
                location.pathname === `${pathList.addFigure}`
                  ? "/images/addfigureblue.svg"
                  : "/images/addfigure.svg"
              }
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
