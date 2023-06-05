import React from "react";
import LoginPageStyled from "./LoginPageStyled";
import LoginForm from "../../components/LoginForm/LoginForm";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import useUser from "../../hooks/useUser/useUser";
import useToken from "../../hooks/useToken/useToken";
import { userLoginActionCreator } from "../../store/user/userSlice";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";
import pathList from "../../utils/pathList/pathList";

const LoginPage = (): React.ReactElement => {
  const { getLoginUser } = useUser();
  const { getDecodeToken } = useToken();
  const { setToken } = useLocalStorage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleUserLogin = async (user: UserCredentialsStructure) => {
    const token = await getLoginUser(user);

    if (token !== "Wrong credentials") {
      const userData = getDecodeToken(token);

      setToken("FIguRaniSTokeN", token);
      dispatch(userLoginActionCreator({ ...userData, token }));
      navigate(`${pathList.figures}`);
    }
  };

  return (
    <>
      <LoginPageStyled>
        <h1>LOGIN</h1>
        <LoginForm actionOnClick={handleUserLogin} />
      </LoginPageStyled>
    </>
  );
};

export default LoginPage;
