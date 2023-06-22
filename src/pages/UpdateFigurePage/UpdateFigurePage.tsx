import React, { useEffect } from "react";
import GenericForm from "../../components/GenericForm/GenericForm";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import UpdateFigurePageStyled from "./UpdateFigurePageStyled";
import { useNavigate, useParams } from "react-router-dom";
import useFigures from "../../hooks/useFigure/useFigure";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadFigureByIdActionCreator } from "../../store/figures/figureSlice";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import pathList from "../../utils/pathList/pathList";
import { FiguresDataStructures } from "../../types";

const UpdateFigurePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const figureData = useAppSelector((state) => state.figure.figureData);
  const { id: fiugreIdParams } = useParams();
  const { getFigureById, updateFigure } = useFigures();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const figure = await getFigureById(fiugreIdParams as string);

      if (figure) {
        dispatch(loadFigureByIdActionCreator(figure));

        const preloadLink = await document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = figure.image;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getFigureById, fiugreIdParams]);

  const handleUpdateFigure = async (figure: Partial<FiguresDataStructures>) => {
    await updateFigure(figure);

    dispatch(paginationActionCreator(0));

    navigate(pathList.figures);
  };

  return (
    <UpdateFigurePageStyled>
      <h1>
        Modify <br /> your figure
      </h1>
      <GeneralContainerStyled>
        <GenericForm
          actionOnClick={handleUpdateFigure}
          buttonClassName="modify"
          textButton="Modify figure"
          figure={figureData}
        />
      </GeneralContainerStyled>
    </UpdateFigurePageStyled>
  );
};

export default UpdateFigurePage;
