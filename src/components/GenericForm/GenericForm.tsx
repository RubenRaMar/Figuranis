import React from "react";
import GenericFormStyled from "./GenericFormStyled";
import { FiguresDataStructures } from "../../types";
import GenericButton from "../GenericButton/GenericButton";

interface GenericFormProps {
  textButton: string;
  buttonClassName: string;
  figure: FiguresDataStructures;
}

const GenericForm = ({
  textButton,
  buttonClassName,
  figure: {
    title,
    character,
    franchise,
    image,
    manufacturer,
    material,
    price,
    size,
    weight,
  },
}: GenericFormProps): React.ReactElement => {
  return (
    <GenericFormStyled>
      <h2 className="heading">
        Insert all the fields to be able
        <br /> to add a figure
      </h2>

      <div className="controler">
        <label htmlFor="title">title</label>
        <input type="text" id="title" autoComplete="off" value={title} />
      </div>

      <div className="controler">
        <label htmlFor="character">character</label>
        <input
          type="text"
          id="character"
          autoComplete="off"
          value={character}
        />
      </div>

      <div className="controler">
        <label htmlFor="franchise">franchise</label>
        <input
          type="text"
          id="franchise"
          autoComplete="off"
          value={franchise}
        />
      </div>

      <div className="controler">
        <label htmlFor="manufacturer">manufacturer</label>
        <input
          type="text"
          id="manufacturer"
          autoComplete="off"
          value={manufacturer}
        />
      </div>

      <div className="controler">
        <label htmlFor="material">material</label>
        <input type="text" id="material" autoComplete="off" value={material} />
      </div>

      <div className="controler">
        <label htmlFor="image">image(Url)</label>
        <input type="text" id="image" autoComplete="off" value={image} />
      </div>

      <div className="controler number">
        <label htmlFor="size">size</label>
        <input type="number" id="size" autoComplete="off" value={size} />
        <span className="symbol">Cm</span>
      </div>

      <div className="controler number">
        <label htmlFor="weight">weight</label>
        <input type="number" id="weight" autoComplete="off" value={weight} />
        <span className="symbol">Kg</span>
      </div>

      <div className="controler number">
        <label htmlFor="price">price</label>
        <input type="number" id="price" autoComplete="off" value={price} />
        <span className="symbol">€</span>
      </div>

      <div className="purchased">
        <label htmlFor="purchased">purchased</label>
        <input className="check" type="checkbox" id="purchased" />
      </div>

      <GenericButton className={buttonClassName} text={textButton} />
    </GenericFormStyled>
  );
};

export default GenericForm;
