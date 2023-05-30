import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader.js";

const Layout = (): React.ReactElement => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default Layout;
