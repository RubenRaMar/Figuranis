import React from "react";
import NavegationMenu from "../NavegationMenu/NavegationMenu";
import MainHeaderStyled from "./MainHeaderStyled";

const MainHeader = (): React.ReactElement => {
  return (
    <MainHeaderStyled>
      <section className="top-header">
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
            width="29"
            height="31"
            loading="lazy"
          />
        </button>
      </section>
      <NavegationMenu />
    </MainHeaderStyled>
  );
};

export default MainHeader;
