import React from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import { useEffect } from "react";

const FiguresPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getFigureList } = useFigures();

  useEffect(() => {
    (async () => {
      const figureList = await getFigureList();

      if (figureList) {
        dispatch(loadFiguresActionCreator(figureList));
      }
    })();
  }, [dispatch, getFigureList]);

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
      <FiguresList />
    </FiguresPageStyled>
  );
};

export default FiguresPage;
