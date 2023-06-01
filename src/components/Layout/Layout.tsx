import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader.js";
import GeneralContainerStyled from "../shared/GeneralContainerStyled.js";

const Layout = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <GeneralContainerStyled>
        <Outlet />
      </GeneralContainerStyled>
    </>
  );
};

export default Layout;
