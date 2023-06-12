import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import pathList from "../../utils/pathList/pathList";
import { deleteFigureActionCreator } from "../../store/figures/figureSlice";
import {
  FigureAddDataStructure,
  FiguresDataStructures,
  ResponseGetStateStructure,
} from "../../types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";

const useFigures = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector(({ user: { token } }) => token);
  const apiUrl = import.meta.env.VITE_API_URL;

  const getFiguresList = useCallback(
    async (
      skip?: number,
      limit?: number,
      filter?: boolean
    ): Promise<ResponseGetStateStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const request = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const {
          data: { figures, length },
        } = await axios.get<{
          figures: FiguresDataStructures[];
          length: number;
        }>(
          `${apiUrl}${pathList.figures}?skip=${skip}&limit=${limit}&filter=${filter}`,
          request
        );
        dispatch(hideLoadingActionCreator());

        return { figures, length };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, token]
  );

  const getFigureById = async (
    id: string
  ): Promise<FiguresDataStructures[] | undefined> => {
    try {
      dispatch(showLoadingActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const {
        data: { figure },
      } = await axios.get<{
        figure: FiguresDataStructures[];
      }>(`${apiUrl}${pathList.figures}/${id}`, request);

      dispatch(hideLoadingActionCreator());

      return figure;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
    }
  };

  const deleteFigure = async (id: string) => {
    try {
      dispatch(showLoadingActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.delete(
        `${apiUrl}${pathList.figures}${pathList.delete}/${id}`,
        request
      );

      dispatch(deleteFigureActionCreator(id));
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
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const {
        data: { figure },
      } = await axios.post<{ figure: FiguresDataStructures }>(
        `${apiUrl}${pathList.figures}${pathList.addFigure}`,
        figureData,
        request
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

  return { getFiguresList, deleteFigure, addFigureApi, getFigureById };
};

export default useFigures;
