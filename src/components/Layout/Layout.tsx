import React from "react";
import { Outlet } from "react-router-dom";
import GeneralContainerStyled from "../shared/GeneralContainerStyled.js";

const Layout = (): React.ReactElement => {
  return (
    <GeneralContainerStyled>
      <Outlet />
    </GeneralContainerStyled>
  );
};

export default Layout;
