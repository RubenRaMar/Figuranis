import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const getLoginUser = async (
    user: UserCredentialsStructure
  ): Promise<string> => {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { token },
      } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, {
        username: user.username,
        password: user.password,
      });

      dispatch(hideLoadingActionCreator());

      return token;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      return "Wrong credentials";
    }
  };

  return { getLoginUser };
};

export default useUser;
