import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store";
import FigureCard from "../FigureCard/FigureCard.js";
import FiguresListStyled from "./FiguresListStyled.js";

const FiguresList = (): React.ReactElement => {
  const [showElement, setShowElement] = useState(false);

  const figures = useAppSelector(({ figure: { figuresData } }) => figuresData);

  useEffect(() => {
    const timerShowElement = setTimeout(() => {
      setShowElement(true);
    }, 500);

    return () => clearTimeout(timerShowElement);
  }, []);

  return (
    <FiguresListStyled
      className={figures.length === 0 ? "figure-list center" : "figure-list"}
    >
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
