import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader.js";
import GeneralContainerStyled from "../shared/GeneralContainerStyled.js";
import Loading from "../Loading/Loading";
import { useAppSelector } from "../../store/index.js";
import Modal from "../Modal/Modal";

const Layout = (): React.ReactElement => {
  const { isLoading, modal } = useAppSelector(({ ui }) => ui);

  return (
    <>
      {modal.isModal && <Modal />}
      {isLoading && <Loading />}
      <MainHeader />
      <GeneralContainerStyled>
        <Outlet />
      </GeneralContainerStyled>
    </>
  );
};

export default Layout;
