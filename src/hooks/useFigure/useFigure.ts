import axios from "axios";
import { useCallback, useMemo } from "react";
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
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = useAppSelector(({ user: { token } }) => token);

  const figuresApi = useMemo(
    () =>
      axios.create({
        baseURL: apiUrl,
        headers: { Authorization: `Bearer ${token}` },
      }),
    [apiUrl, token]
  );

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

        const {
          data: { figures, length },
        } = await figuresApi.get<{
          figures: FiguresDataStructures[];
          length: number;
        }>(
          `${apiUrl}${pathList.figures}?skip=${skip}&limit=${limit}&filter=${filter}`
        );
        dispatch(hideLoadingActionCreator());

        return { figuresData: figures, length };
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, figuresApi]
  );

  const getFigureById = useCallback(
    async (id: string): Promise<FiguresDataStructures | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { figure },
        } = await figuresApi.get<{
          figure: FiguresDataStructures;
        }>(`${apiUrl}${pathList.figures}/${id}`);

        dispatch(hideLoadingActionCreator());

        return figure;
      } catch (error) {
        dispatch(hideLoadingActionCreator());
      }
    },
    [apiUrl, dispatch, figuresApi]
  );

  const deleteFigure = async (id: string): Promise<void> => {
    try {
      dispatch(showLoadingActionCreator());

      await figuresApi.delete(
        `${apiUrl}${pathList.figures}${pathList.delete}/${id}`
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

  const updateFigure = async (
    figure: Partial<FiguresDataStructures>
  ): Promise<void> => {
    try {
      dispatch(showLoadingActionCreator());

      await figuresApi.put<{ message: string }>(
        `${apiUrl}${pathList.figures}`,
        figure
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
