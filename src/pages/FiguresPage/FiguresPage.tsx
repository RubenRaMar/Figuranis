import React, { useEffect } from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import FiguresList from "../../components/FiguresList/FiguresList";
import useFigures from "../../hooks/useFigure/useFigure";
import Pagination from "../../components/Pagination/Pagination";

const FiguresPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getFiguresList } = useFigures();

  useEffect(() => {
    (async () => {
      const figureList = await getFiguresList("1", "2");

      if (figureList) {
        dispatch(loadFiguresActionCreator(figureList));
      }
    })();
  }, [dispatch, getFiguresList]);

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
      <FiguresList />
      <Pagination />
    </FiguresPageStyled>
  );
};

export default FiguresPage;
