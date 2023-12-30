import axios from "axios";
import { useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { modalsImages, modalsMessage } from "../../utils/modalsData/modalsData";
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
  const {
    removeCorrect,
    removeError,
    addCorrect,
    addError,
    modifyCorrect,
    modifyError,
  } = modalsImages;

  const figuresApi = useMemo(
    () =>
      axios.create({
        baseURL: apiUrl,
        headers: { Authorization: `Bearer ${token}` },
      }),
    [apiUrl, token]
  );

  interface GetFiguresListProps {
    page?: number;
    totalFiguresToShow?: number;
    isPurchasedFilter?: boolean;
  }

  const getFiguresList = useCallback(
    async ({
      page,
      isPurchasedFilter,
      totalFiguresToShow,
    }: GetFiguresListProps): Promise<
      Pick<FiguresStateStructure, "figuresData" | "totalFigures"> | undefined
    > => {
      try {
        dispatch(showLoadingActionCreator());

        const queryParams = [
          page && page > 1 && `page=${--page}`,
          totalFiguresToShow && `limit=${totalFiguresToShow}`,
          isPurchasedFilter !== undefined && `purchased=${!isPurchasedFilter}`,
        ]
          .filter(Boolean)
          .join("&");

        const {
          data: { figures, length: totalFigures },
        } = await figuresApi.get<{
          figures: FiguresDataStructures[];
          length: number;
        }>(`${apiUrl}${pathList.figures}?${queryParams}`);
        dispatch(hideLoadingActionCreator());

        return { figuresData: figures, totalFigures };
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
          isError: false,
          isModal: true,
          message: modalsMessage.removeCorrect,
          image: {
            src: removeCorrect.src,
            alt: removeCorrect.alt,
          },
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          isModal: true,
          message: modalsMessage.removeError,
          image: {
            src: removeError.src,
            alt: removeError.alt,
          },
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
          isError: false,
          isModal: true,
          message: modalsMessage.addCorrect,
          image: {
            src: addCorrect.src,
            alt: addCorrect.alt,
          },
        })
      );

      return figure;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          isModal: true,
          message: modalsMessage.addError,
          image: {
            src: addError.src,
            alt: addError.alt,
          },
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
          isError: false,
          isModal: true,
          message: modalsMessage.modifyCorrect,
          image: {
            src: modifyCorrect.src,
            alt: modifyCorrect.alt,
          },
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: true,
          isModal: true,
          message: modalsMessage.modifyError,
          image: {
            src: modifyError.src,
            alt: modifyError.alt,
          },
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
