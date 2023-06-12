import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import DetailsFigurePageStyled from "./DetailsFigurePageStyled";
import GenericButton from "../../components/GenericButton/GenericButton";
import useFigures from "../../hooks/useFigure/useFigure";
import { loadFigureByIdActionCreator } from "../../store/figures/figureSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { FiguresDataStructures } from "../../types";

const DetailsFigurePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const figure = useAppSelector((state) => state.figure.figuresData[0]);
  const { id } = useParams();
  const { getFigureById } = useFigures();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const figure = await getFigureById(id as string);

      if (figure) {
        dispatch(
          loadFigureByIdActionCreator(figure as FiguresDataStructures[])
        );

        const preloadLink = await document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = figure[0].character;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getFigureById, id]);

  const {
    title,
    character,
    franchise,
    purchased,
    manufacturer,
    material,
    size,
    weight,
    price,
    image,
  } = figure;

  return (
    <DetailsFigurePageStyled>
      <h1>
        Figure <br />
        details
      </h1>
      <GeneralContainerStyled>
        <div className="details-container">
          <article className="top">
            <span className="top__franchise">{franchise}</span>
            <img
              width="277"
              height="409"
              className="top__image"
              src={image}
              alt=""
            />
            <span className="top__title">{title}</span>
          </article>
          <div className={purchased ? "purchased" : "pending"}>
            <span className="purchased__title pending__title">Purchased</span>
            <span className="purchased__price pending__price">{`${price} €`}</span>
          </div>
          <article className="bottom">
            <div className="bottom__data">
              <span className="bottom__title">Character</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">{character}</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Manufacturer</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">{manufacturer}</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Material</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">{material}</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Size</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">{`${size} cm`}</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Weight</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">{`${weight} Kg`}</span>
              </div>
            </div>

            <div className="bottom__buttons">
              <GenericButton
                className="modify"
                actionOnClick={() => {
                  return;
                }}
                text="modify"
              />
              <GenericButton
                className="delete"
                actionOnClick={() => {
                  return;
                }}
                text="delete"
              />
            </div>
          </article>
        </div>
      </GeneralContainerStyled>
    </DetailsFigurePageStyled>
  );
};

export default DetailsFigurePage;
