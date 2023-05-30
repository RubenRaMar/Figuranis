import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
const LoginPage = (): React.ReactElement => {
  return (
    <>
      <LoginPageStyled>
        <h1>LOGIN</h1>
      </LoginPageStyled>
      <GeneralContainerStyled>
        <LoginForm />
      </GeneralContainerStyled>
    </>
  );
};

export default LoginPage;
