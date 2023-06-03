import React from "react";
import { useAppSelector } from "../../store";
import FigureCard from "../FigureCard/FigureCard.js";
import FiguresListStyled from "./FiguresListStyled.js";

const FiguresList = (): React.ReactElement => {
  const figures = useAppSelector((state) => state.figure.figuresData);

  return (
    <FiguresListStyled className="figure-list">
      {figures.map((figure) => (
        <FigureCard figure={figure} key={figure.id} />
      ))}
    </FiguresListStyled>
  );
};

export default FiguresList;
