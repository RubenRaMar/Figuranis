import axios from "axios";
import { UserCredentialsStructure } from "../../types";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { modalsImages, modalsMessage } from "../../utils/modalsData/modalsData";

const useUser = () => {
  const dispatch = useAppDispatch();

  const getLoginUser = async (
    user: UserCredentialsStructure
  ): Promise<string | undefined> => {
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
      dispatch(
        showModalActionCreator({
          isError: true,
          isModal: true,
          message: modalsMessage.wrongCredentials,
          image: {
            src: modalsImages.wrongCredentials.src,
            alt: modalsImages.wrongCredentials.alt,
          },
        })
      );
    }
  };

  return { getLoginUser };
};

export default useUser;
