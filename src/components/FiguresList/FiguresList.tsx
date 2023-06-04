import React, { useState } from "react";
import { useEffect } from "react";
import { useAppSelector } from "../../store";
import FigureCard from "../FigureCard/FigureCard.js";
import FiguresListStyled from "./FiguresListStyled.js";

const FiguresList = (): React.ReactElement => {
  const [showElement, setShowElement] = useState(false);

  const figures = useAppSelector((state) => state.figure.figuresData);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(true);
      clearTimeout(timer);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <FiguresListStyled className="figure-list">
      {figures.map((figure, posotion) => (
        <FigureCard figure={figure} key={figure.id} position={posotion} />
      ))}
      {showElement && figures.length === 0 && (
        <div className="figures-not-found">
          <img
            src="/images/lostgoku.png"
            alt="Son Goku searching with the dragon radar"
            height="189"
            width="121"
          />
          <span>
            No figures have
            <br /> been found to list
          </span>
        </div>
      )}
    </FiguresListStyled>
  );
};

export default FiguresList;
