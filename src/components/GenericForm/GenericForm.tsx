import React, { useState } from "react";
import GenericFormStyled from "./GenericFormStyled";
import { FigureAddDataStructure } from "../../types";
import GenericButton from "../GenericButton/GenericButton";

interface GenericFormProps {
  actionOnClick: (figure: FigureAddDataStructure) => void;
  textButton: string;
  buttonClassName: string;
}

const GenericForm = ({
  actionOnClick,
  textButton,
  buttonClassName,
}: GenericFormProps): React.ReactElement => {
  const initialFigureState: FigureAddDataStructure = {
    title: "",
    character: "",
    franchise: "",
    image: "",
    manufacturer: "",
    material: "",
    price: 0,
    purchased: false,
    size: 0,
    weight: 0,
  };

  const [figureData, setFigureData] = useState(initialFigureState);

  const {
    title,
    character,
    franchise,
    image,
    manufacturer,
    material,
    price,
    purchased,
    size,
    weight,
  } = figureData;

  const isDisabled =
    title !== "" &&
    character !== "" &&
    franchise !== "" &&
    image !== "" &&
    manufacturer !== "" &&
    material !== "" &&
    price !== 0 &&
    size !== 0 &&
    weight !== 0;

  const onChangeFigureData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.id === "purchased"
      ? setFigureData({
          ...figureData,
          purchased: !purchased,
        })
      : setFigureData({
          ...figureData,
          [event.target.id]: event.target.value,
        });
  };

  const handleAddFigureSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    actionOnClick(figureData);
  };

  return (
    <GenericFormStyled onSubmit={handleAddFigureSubmit}>
      <h2 className="heading">
        Insert all the fields to be able
        <br /> to add a figure
      </h2>
      <div className="controler">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={title}
        />
      </div>
      <div className="controler">
        <label htmlFor="character">character</label>
        <input
          type="text"
          id="character"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={character}
        />
      </div>
      <div className="controler">
        <label htmlFor="franchise">franchise</label>
        <input
          type="text"
          id="franchise"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={franchise}
        />
      </div>
      <div className="controler">
        <label htmlFor="manufacturer">manufacturer</label>
        <input
          type="text"
          id="manufacturer"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={manufacturer}
        />
      </div>
      <div className="controler">
        <label htmlFor="material">material</label>
        <input
          type="text"
          id="material"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={material}
        />
      </div>
      <div className="controler">
        <label htmlFor="image">image(Url)</label>
        <input
          type="url"
          id="image"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={image}
        />
      </div>
      <div className="controler number">
        <label htmlFor="size">size</label>
        <input
          type="number"
          id="size"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={size ? size : ""}
        />
        <span className="symbol">Cm</span>
      </div>
      <div className="controler number">
        <label htmlFor="weight">weight</label>
        <input
          type="number"
          id="weight"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={weight ? weight : ""}
        />
        <span className="symbol">Kg</span>
      </div>
      <div className="controler number">
        <label htmlFor="price">price</label>
        <input
          type="number"
          id="price"
          autoComplete="off"
          onChange={onChangeFigureData}
          value={price ? price : ""}
        />
        <span className="symbol">€</span>
      </div>
      <div className="purchased">
        <label htmlFor="purchased">purchased</label>
        <input
          className="check"
          type="checkbox"
          id="purchased"
          onChange={onChangeFigureData}
          checked={purchased}
        />
      </div>

      <GenericButton
        isDisabled={!isDisabled}
        className={buttonClassName}
        text={textButton}
      />
    </GenericFormStyled>
  );
};

export default GenericForm;
