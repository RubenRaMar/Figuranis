import React from "react";
import GeneralContainerStyled from "../../components/shared/GeneralContainerStyled";
const DetailsFigurePage = (): React.ReactElement => {
  return (
    <main>
      <h1>Figure details</h1>
      <GeneralContainerStyled>
        <div className="details-container">
          <article className="top">
            <span className="top__franchise">Dragon ball</span>
            <img
              className="top__image"
              src="https://i.ibb.co/SQtQ4tC/luffy.webp"
              alt=""
            />
            <span className="top__title">
              Dragon Ball ZBC Studio Goku Extreme Power Monkey Resin Statue
            </span>
          </article>
          <article className="bottom">
            <div className="bottom__purchased">
              <span className="bottom__purchased__title">Purchased :</span>
              <span className="bottom__purchased__price">600€</span>
            </div>
            <div className="bottom__data">
              <span className="bottom__data__title">Character :</span>
              <span className="bottom__data__descpription">
                Son Goku Extrem Power
              </span>
            </div>
            <div className="bottom__data">
              <span className="bottom__data__title">Manufacturer</span>
              <span className="bottom__data__descpription">ZBC Studio</span>
            </div>
            <div className="bottom__data">
              <span className="bottom__data_title">Material :</span>
              <span className="bottom__data_descpription_">Resina</span>
            </div>
            <div className="bottom__data">
              <span className="bottom__data__title">Size :</span>
              <span className="bottom__data__descpription">46 cm.</span>
            </div>
            <div className="bottom__data">
              <span className="bottom__data__title">Weight :</span>
              <span className="bottom__data__descpription">4.65 kg.</span>
            </div>
          </article>
        </div>
      </GeneralContainerStyled>
    </main>
  );
};

export default DetailsFigurePage;
