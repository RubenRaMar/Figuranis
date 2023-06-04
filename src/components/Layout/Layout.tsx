import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader.js";
import GeneralContainerStyled from "../shared/GeneralContainerStyled.js";
import Loading from "../Loading/Loading.js";

const Layout = (): React.ReactElement => {
  return (
    <>
      <Loading />
      <MainHeader />
      <GeneralContainerStyled>
        <Outlet />
      </GeneralContainerStyled>
    </>
  );
};

export default Layout;
