import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import DetailsFigurePageStyled from "./DetailsFigurePageStyled";
import GenericButton from "../../components/GenericButton/GenericButton";
import useFigures from "../../hooks/useFigure/useFigure";
import { loadFigureByIdActionCreator } from "../../store/figures/figureSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { paginationActionCreator } from "../../store/ui/uiSlice";
import pathList from "../../utils/pathList/pathList";

const DetailsFigurePage = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const figureData = useAppSelector((state) => state.figure.figureData);
  const { id: fiugreIdParams } = useParams();
  const { getFigureById, deleteFigure } = useFigures();

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const figure = await getFigureById(fiugreIdParams as string);

      if (figure) {
        dispatch(loadFigureByIdActionCreator(figure));

        const preloadLink = await document.createElement("link");
        preloadLink.rel = "preload";
        preloadLink.as = "image";
        preloadLink.href = figure.image;

        const head = document.head;
        const firstChild = head.firstChild;
        head.insertBefore(preloadLink, firstChild);
      }
    })();
  }, [dispatch, getFigureById, fiugreIdParams]);

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
    id,
  } = figureData;

  const handleDeleteFigure = async () => {
    await deleteFigure(id);

    navigate(`${pathList.figures}`);
    dispatch(paginationActionCreator(0));
  };

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
              alt={`${character} figure`}
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
              <GenericButton className="modify" text="modify" />
              <GenericButton
                className="delete"
                text="delete"
                actionOnClick={handleDeleteFigure}
              />
            </div>
          </article>
        </div>
      </GeneralContainerStyled>
    </DetailsFigurePageStyled>
  );
};

export default DetailsFigurePage;
