import React, { useEffect } from "react";
import NavegationMenu from "../NavegationMenu/NavegationMenu";
import MainHeaderStyled from "./MainHeaderStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { userLogoutActionCreator } from "../../store/user/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pathList from "../../utils/pathList/pathList";
import { loadFiguresFilterActionCreator } from "../../store/figures/figureSlice";

const MainHeader = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogged = useAppSelector(({ user: { isLogged } }) => isLogged);
  const filter = useAppSelector(({ figure: { filter } }) => filter);
  const { removeToken } = useLocalStorage();

  useEffect(() => {
    if (filter && location.pathname !== pathList.figures) {
      dispatch(loadFiguresFilterActionCreator());
    }
  }, [dispatch, filter, location.pathname]);

  const handleLogoutUser = () => {
    removeToken("FIguRaniSTokeN");
    dispatch(userLogoutActionCreator());
    navigate(`${pathList.user}${pathList.login}`);
  };

  return (
    <MainHeaderStyled>
      <div className="top-header">
        <Link
          to={
            location.pathname.includes(`${pathList.user}${pathList.login}`)
              ? `${pathList.user}${pathList.login}`
              : pathList.figures
          }
        >
          <img
            src="/images/logo.webp"
            alt="Figuranis logotype"
            width="250"
            height="98"
            loading="lazy"
          />
        </Link>
        {isLogged ? (
          <button
            aria-label={"Logout button"}
            onClick={handleLogoutUser}
            className="logout-login"
          >
            <img
              src="/images/logout.svg"
              alt="Logout button icon"
              width="29"
              height="31"
              loading="lazy"
            />
          </button>
        ) : (
          <button
            aria-label={"Login button"}
            onClick={handleLogoutUser}
            className="logout-login"
          >
            <img
              src="/images/login.svg"
              alt="Login button icon"
              width="29"
              height="31"
              loading="lazy"
            />
          </button>
        )}
      </div>
      {isLogged && <NavegationMenu />}
    </MainHeaderStyled>
  );
};

export default MainHeader;
