import axios from "axios";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import pathList from "../../utils/pathList/pathList";
import { deleteFigureActionCreator } from "../../store/figures/figureSlice";
import { FiguresDataStructures, FiguresStateStructure } from "../../types";
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
    ): Promise<
      Pick<FiguresStateStructure, "figuresData" | "length"> | undefined
    > => {
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

        return { figuresData: figures, length };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, token]
  );

  const getFigureById = useCallback(
    async (id: string): Promise<FiguresDataStructures | undefined> => {
      try {
        dispatch(showLoadingActionCreator());
        const request = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const {
          data: { figure },
        } = await axios.get<{
          figure: FiguresDataStructures;
        }>(`${apiUrl}${pathList.figures}/${id}`, request);

        dispatch(hideLoadingActionCreator());

        return figure;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, token]
  );

  const deleteFigure = async (id: string): Promise<void> => {
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
    figureData: Partial<FiguresDataStructures>
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

  const updateFigure = async (
    figure: Partial<FiguresDataStructures>
  ): Promise<void> => {
    const request = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      dispatch(showLoadingActionCreator());

      await axios.put<{ message: string }>(
        `${apiUrl}${pathList.figures}`,
        figure,
        request
      );

      dispatch(hideLoadingActionCreator());

      dispatch(
        showModalActionCreator({
          error: false,
          isModal: true,
          message: modalsMessage.modifyCorrect,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          error: true,
          isModal: true,
          message: modalsMessage.modifyError,
        })
      );
    }
  };

  return {
    getFiguresList,
    deleteFigure,
    addFigureApi,
    getFigureById,
    updateFigure,
  };
};

export default useFigures;
