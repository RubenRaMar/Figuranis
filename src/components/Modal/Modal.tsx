import React from "react";
import ModalStyled from "./ModalStyled";
import { useAppSelector } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";

const Modal = (): React.ReactElement => {
  const { error, message } = useAppSelector(({ ui: { modal } }) => modal);

  let modalImage = "";
  let alt = "";

  switch (message) {
    case modalsMessage.wrongCredentials:
      modalImage = "/images/modal/gotranks.svg";
      alt = "Skeletonized and disgruntled Gotranks";
      break;

    case modalsMessage.addCorrect:
      modalImage = "/images/modal/luffy.svg";
      alt = "Kid Luffy celebrating";
      break;

    case modalsMessage.addError:
      modalImage = "/images/modal/hero.svg";
      alt = "Kid Katsuki angry";
      break;

    case modalsMessage.modifyCorrect:
      modalImage = "/images/modal/goku.svg";
      alt = "Kid Goku jumping and happy";
      break;

    case modalsMessage.modifyError:
      modalImage = "/images/modal/gengar.svg";
      alt = "Gengar angry";
      break;

    case modalsMessage.removeCorrect:
      modalImage = "/images/modal/arale.svg";
      alt = "Kid Arale happy and waving";
      break;

    case modalsMessage.removeError:
      modalImage = "/images/modal/naruto.svg";
      alt = "Kid Naruto angry";
      break;
  }

  return (
    <ModalStyled>
      <article className={`modal ${!error && "error"}`}>
        <button className="modal__closeButton">
          <img
            src="/images/closemodal.svg"
            alt="An X to close"
            loading="lazy"
          />
        </button>
        <img
          className="modal__image"
          loading="lazy"
          src={modalImage}
          alt={alt}
          width="150"
          height="150"
        />
        <span className="modal__text">{message}</span>
      </article>
    </ModalStyled>
  );
};

export default Modal;
