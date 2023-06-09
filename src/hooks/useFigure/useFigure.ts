import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { FigureAddDataStructure, FiguresDataStructures } from "../../types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import pathList from "../../utils/pathList/pathList";

const useFigures = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(({ user: { token } }) => token);
  const apiUrl = import.meta.env.VITE_API_URL;

  const figuresApi = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: `Bearer ${token}` },
  });

  const getFiguresList = useCallback(async (): Promise<
    FiguresDataStructures[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { figures },
      } = await figuresApi.get<{ figures: FiguresDataStructures[] }>(
        `${apiUrl}${pathList.figures}`
      );

      dispatch(hideLoadingActionCreator());

      return figures;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
    }
  }, [apiUrl, figuresApi, dispatch]);

  const deleteFigure = async (id: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await figuresApi.delete(
        `${apiUrl}${pathList.figures}${pathList.delete}/${id}`
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          error: false,
          isModal: true,
          message: modalsMessage.removeCorrect,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          error: true,
          isModal: true,
          message: modalsMessage.removeError,
        })
      );
    }
  };

  const addFigureApi = async (
    figureData: FigureAddDataStructure
  ): Promise<FiguresDataStructures | undefined> => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { figure },
      } = await figuresApi.post<{ figure: FiguresDataStructures }>(
        `${apiUrl}${pathList.figures}${pathList.addFigure}`,
        figureData
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          error: false,
          isModal: true,
          message: modalsMessage.addCorrect,
        })
      );

      return figure;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          error: true,
          isModal: true,
          message: modalsMessage.addError,
        })
      );
    }
  };

  return { getFiguresList, deleteFigure, addFigureApi };
};

export default useFigures;
