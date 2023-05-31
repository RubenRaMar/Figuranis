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
          loading="lazy"
        />
        <button className="logout">
          <img
            src="/images/logout.svg"
            alt="Logout button icon"
            loading="lazy"
          />
        </button>
      </MainHeaderStyled>
      <NavegationMenu />
    </>
  );
};

export default MainHeader;
