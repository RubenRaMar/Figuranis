import React from "react";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
import DetailsFigurePageStyled from "./DetailsFigurePageStyled";
import GenericButton from "../../components/GenericButton/GenericButton";
const DetailsFigurePage = (): React.ReactElement => {
  return (
    <DetailsFigurePageStyled>
      <h1>
        Figure <br />
        details
      </h1>
      <GeneralContainerStyled>
        <div className="details-container">
          <article className="top">
            <span className="top__franchise">Dragon ball</span>
            <img
              width="277"
              height="409"
              className="top__image"
              src="https://i.ibb.co/SQtQ4tC/luffy.webp"
              alt=""
            />
            <span className="top__title">
              Dragon Ball ZBC Studio Goku Extreme Power Monkey Resin Statue
            </span>
          </article>
          <div className="purchased">
            <span className="purchased__title">Purchased</span>
            <span className="purchased__price">697.34€</span>
          </div>
          <article className="bottom">
            <div className="bottom__data">
              <span className="bottom__title">Character</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">
                  Son Goku Extrem Power
                </span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Manufacturer</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">ZBC Studio</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Material</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">Resina</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Size</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">46 Cm</span>
              </div>
            </div>
            <div className="bottom__data">
              <span className="bottom__title">Weight</span>
              <div className="bottom__description-container">
                <span className="bottom__point"></span>
                <span className="bottom__description">4.65 Kg</span>
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
