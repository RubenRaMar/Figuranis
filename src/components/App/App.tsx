import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import { userLoginActionCreator } from "../../store/user/userSlice";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";

const App = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getToken } = useLocalStorage();
  const { getDecodeToken } = useToken();

  useEffect(() => {
    const token = getToken("FIguRaniSTokeN");

    if (token) {
      const userData = getDecodeToken(token);
      dispatch(userLoginActionCreator({ ...userData, token }));

      navigate("/figures");
    }
  }, [dispatch, getDecodeToken, getToken, navigate]);

  return <Layout />;
};

export default App;
