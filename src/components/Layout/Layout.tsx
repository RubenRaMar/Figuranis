import React from "react";
import { Outlet } from "react-router-dom";
import GeneralContainerStyled from "../shared/GeneralContainerStyled.js";
import MainHeader from "../MainHeader/MainHeader.js";

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
