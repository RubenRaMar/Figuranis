import React from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import { figuresMock } from "../../mocks/figures/figures";
import FiguresList from "../../components/FiguresList/FiguresList";

const FiguresPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadFiguresActionCreator(figuresMock));

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
