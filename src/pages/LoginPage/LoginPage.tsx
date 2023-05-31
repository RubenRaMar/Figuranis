import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserCredentialsStructure } from "../../types";
const LoginPage = (): React.ReactElement => {
  const handleUserLogin = (user: UserCredentialsStructure) => user;

  return (
    <>
      <LoginPageStyled>
        <h1>LOGIN</h1>
      </LoginPageStyled>
      <GeneralContainerStyled>
        <LoginForm actionOnClick={handleUserLogin} />
      </GeneralContainerStyled>
    </>
  );
};

export default LoginPage;
