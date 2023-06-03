import React from "react";
import { useAppSelector } from "../../store";
import FigureCard from "../FigureCard/FigureCard";
import FiguresListStyled from "./FiguresListStyled";

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
