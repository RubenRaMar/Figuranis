import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { FiguresDataStructures } from "../../types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useFigures = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(({ user: { token } }) => token);
  const apiUrl = import.meta.env.VITE_API_URL;

  const figuresApi = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: `Bearer ${token}` },
  });

  const getFigureList = useCallback(async (): Promise<
    FiguresDataStructures[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { figures },
      } = await figuresApi.get<{ figures: FiguresDataStructures[] }>(
        `${apiUrl}/figures`
      );

      dispatch(hideLoadingActionCreator());

      return figures;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
    }
  }, [apiUrl, figuresApi, dispatch]);

  return { getFigureList };
};

export default useFigures;
