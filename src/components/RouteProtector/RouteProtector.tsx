import React from "react";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userLoginActionCreator } from "../../store/user/userSlice";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";

const RouteProtector = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { getToken } = useLocalStorage();
  const { getDecodeToken } = useToken();
  const location = useLocation();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      return navigate("/user/login");
    }

    if (location.pathname === "/user/login") {
      navigate("/figures");
    }

    const userData = getDecodeToken(token);

    dispatch(userLoginActionCreator({ ...userData, token }));
  }, [dispatch, getDecodeToken, getToken, location.pathname, navigate]);

  return <Layout />;
};

export default RouteProtector;
