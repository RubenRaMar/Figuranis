import axios from "axios";
import { UserCredentialsStructure } from "../types";

const useUser = () => {
  const getLoginUser = async (
    user: UserCredentialsStructure
  ): Promise<string> => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const {
      data: { token },
    } = await axios.post<{ token: string }>(`${apiUrl}/user/login`, {
      username: user.username,
      password: user.password,
    });

    return token;
  };
  return { getLoginUser };
};

export default useUser;
