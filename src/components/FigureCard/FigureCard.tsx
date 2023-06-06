import React from "react";
import { FiguresDataStructures } from "../../types.js";
import FigureCardStyled from "./FigureCardStyled.js";
import GenericButton from "../GenericButton/GenericButton.js";
import { useAppDispatch } from "../../store/index.js";
import { deleteFigureActionCreator } from "../../store/figures/figureSlice.js";
import useFigures from "../../hooks/useFigure/useFigure.js";

interface FigureCardProps {
  figure: FiguresDataStructures;
  position: number;
}

const FigureCard = ({
  figure: { title, franchise, purchased, image, price, id },
  position,
}: FigureCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteFigure } = useFigures();

  const handleDeleteFigure = async () => {
    await deleteFigure(id);

    dispatch(deleteFigureActionCreator(id));
  };

  return (
    <FigureCardStyled>
      <article className={`figure${purchased ? "" : "--pending"}`}>
        <img
          width="277"
          height="382"
          className="figure__image"
          src={image}
          alt={`${title} figure`}
          loading={position ? "lazy" : "eager"}
        />
        <span
          aria-label={`The figure is ${purchased ? "purchased" : "pending"}`}
          className={`figure__data__${purchased ? "purchased" : "pending"}`}
        >
          {purchased ? "Purchased" : "Pending"}
        </span>
        <div className="figure__data">
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
          <GenericButton
            actionOnClick={handleDeleteFigure}
            className="delete"
            text="Delete"
          />
        </div>
      </article>
    </FigureCardStyled>
  );
};

export default FigureCard;
