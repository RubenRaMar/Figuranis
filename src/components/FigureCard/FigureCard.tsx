import React from "react";
import { FiguresDataStructures } from "../../types.js";
import FigureCardStyled from "./FigureCardStyled.js";
import GenericButton from "../GenericButton/GenericButton.js";
import useFigures from "../../hooks/useFigure/useFigure.js";
import { useNavigate } from "react-router-dom";
import pathList from "../../utils/pathList/pathList.js";

interface FigureCardProps {
  figure: FiguresDataStructures;
  position: number;
}

const FigureCard = ({
  figure: { title, franchise, purchased, image, price, id },
  position,
}: FigureCardProps): React.ReactElement => {
  const { deleteFigure } = useFigures();
  const navigate = useNavigate();

  const handleDeleteFigure = async () => await deleteFigure(id);
  const handleDetailsFigure = async () => navigate(`${pathList.figures}/${id}`);

  return (
    <FigureCardStyled>
      <button
        onClick={handleDetailsFigure}
        className={`figure${purchased ? "" : "--pending"}`}
      >
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
          <h2 className="data__franchise">{franchise}</h2>
          <span
            aria-label={`The figure title is ${title}`}
            className="data__title"
          >
            {title}
          </span>
          <span
            aria-label={`The figure price is ${price} euros`}
            className="data__price"
          >{`${price}€`}</span>
          <GenericButton
            isDisabled={false}
            actionOnClick={handleDeleteFigure}
            className="delete"
            text="Delete"
          />
        </div>
      </button>
    </FigureCardStyled>
  );
};

export default FigureCard;
