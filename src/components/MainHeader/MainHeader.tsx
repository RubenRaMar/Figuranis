import React from "react";
import NavegationMenu from "../NavegationMenu/NavegationMenu";
import MainHeaderStyled from "./MainHeaderStyled";
import { useAppDispatch, useAppSelector } from "../../store";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { userLogoutActionCreator } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const MainHeader = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLogged } = useAppSelector((status) => status.user);
  const { removeToken } = useLocalStorage();

  const handleLogoutUser = () => {
    removeToken("FIguRaniSTokeN");
    dispatch(userLogoutActionCreator());
    navigate("/");
  };

  return (
    <MainHeaderStyled>
      <div className="top-header">
        <img
          src="/images/logo.webp"
          alt="Figuranis logotype"
          width="250"
          height="99"
          loading="lazy"
        />
        <button
          aria-label="Logout button"
          onClick={handleLogoutUser}
          className="logout"
        >
          <img
            src="/images/logout.svg"
            alt="Logout button icon"
            width="29"
            height="31"
            loading="lazy"
          />
        </button>
      </div>
      {isLogged && <NavegationMenu />}
    </MainHeaderStyled>
  );
};

export default MainHeader;
