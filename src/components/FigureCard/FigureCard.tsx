import React from "react";
import { FiguresDataStructures } from "../../types.js";
import FigureCardStyled from "./FigureCardStyled.js";

interface FigureCardProps {
  figure: FiguresDataStructures;
}

const FigureCard = ({
  figure: { title, franchise, purchased, image, price },
}: FigureCardProps): React.ReactElement => {
  return (
    <FigureCardStyled>
      <article className={`figure${purchased ? "" : "--pending"}`}>
        <img className="figure__image" src={image} alt={`${title} figure`} />
        <div className="figure__data">
          <span
            aria-label={`The figure is ${purchased ? "purchased" : "pending"}`}
            className={`figure__data__${purchased ? "purchased" : "pending"}`}
          >
            {purchased ? "Purchased" : "Pending"}
          </span>
          <h2 className="figure__data__franchise">{franchise}</h2>
          <span
            aria-label={`The figure title is ${title}`}
            className="figure__data__title"
          >
            {title}
          </span>
          <span
            aria-label={`The figure price is ${price} euros`}
            className="figure__data__price"
          >{`${price}€`}</span>
        </div>
      </article>
    </FigureCardStyled>
  );
};

export default FigureCard;
