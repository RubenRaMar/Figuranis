import React, { useEffect, useState } from "react";
import GenericFormStyled from "./GenericFormStyled";
import { FigureAddDataStructure, FiguresDataStructures } from "../../types";
import GenericButton from "../GenericButton/GenericButton";
import { useAppDispatch } from "../../store";
import { paginationActionCreator } from "../../store/ui/uiSlice";

interface GenericFormProps {
  actionOnClick: (figure: Partial<FiguresDataStructures>) => void;
  textButton: string;
  buttonClassName: string;
  figure?: FiguresDataStructures;
}

const GenericForm = ({
  actionOnClick,
  textButton,
  buttonClassName,
  figure,
}: GenericFormProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const initialFigureState: FigureAddDataStructure = {
    title: "",
    character: "",
    franchise: "",
    image: "",
    manufacturer: "",
    material: "",
    price: 0,
    isPurchased: false,
    size: 0,
    weight: 0,
  };

  const [figureData, setFigureData] = useState(initialFigureState);

  useEffect(() => {
    if (figure) {
      setFigureData(figure);
    }
  }, [figure]);

  const {
    title,
    character,
    franchise,
    image,
    manufacturer,
    material,
    price,
    isPurchased,
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
          isPurchased: !isPurchased,
        })
      : setFigureData({
          ...figureData,
          [event.target.id]: event.target.value,
        });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const initialPage = 1;

    if (textButton === "Add figure") {
      dispatch(paginationActionCreator(initialPage));
    }

    actionOnClick(figureData);
  };

  return (
    <GenericFormStyled onSubmit={handleOnSubmit}>
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
        <label htmlFor="image">image (URL)</label>
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
          value={size || ""}
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
          value={weight || ""}
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
          value={price || ""}
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
          checked={isPurchased}
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
