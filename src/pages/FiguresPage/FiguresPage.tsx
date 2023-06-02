import React from "react";
import FiguresPageStyled from "./FiguresPageStyled";
import { useAppDispatch } from "../../store";
import { loadFiguresActionCreator } from "../../store/figures/figureSlice";
import { figuresMock } from "../../mocks/figures/figures";

const FiguresPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadFiguresActionCreator(figuresMock));

  return (
    <FiguresPageStyled>
      <h1>
        Your favorite <br /> figures
      </h1>
    </FiguresPageStyled>
  );
};

export default FiguresPage;
