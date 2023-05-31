import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import useUser from "../../hooks/useUser/useUser";
import useToken from "../../hooks/useToken/useToken";
import { userLoginActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
const LoginPage = (): React.ReactElement => {
  const { getLoginUser } = useUser();
  const { getLoginToken } = useToken();
  const { setToken } = useLocalStorage();
  const dispatch = useAppDispatch();

  const handleUserLogin = async (user: UserCredentialsStructure) => {
    const token = await getLoginUser(user);

    if (token) {
      const userData = getLoginToken(token);

      setToken("FIguRaniSTokeN", token);
      dispatch(userLoginActionCreator(userData));
    }
  };

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
