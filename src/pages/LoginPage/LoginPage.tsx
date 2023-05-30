import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
const LoginPage = (): React.ReactElement => {
  return (
    <LoginPageStyled>
      <h1>LOGIN</h1>
      <GeneralContainerStyled></GeneralContainerStyled>
    </LoginPageStyled>
  );
};

export default LoginPage;
