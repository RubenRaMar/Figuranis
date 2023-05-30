import React from "react";
import NavegationMenu from "../NavegationMenu/NavegationMenu";
import MainHeaderStyled from "./MainHeaderStyled";

const MainHeader = (): React.ReactElement => {
  return (
    <>
      <MainHeaderStyled>
        <img
          src="/images/logo.svg"
          alt="Figuranis logotype"
          width="270"
          height="128"
        />
        <img
          className="logout"
          src="/images/logout.svg"
          alt="Logout button icon"
        />
      </MainHeaderStyled>
      <NavegationMenu />
    </>
  );
};

export default MainHeader;
