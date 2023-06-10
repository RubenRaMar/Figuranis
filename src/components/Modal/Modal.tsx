import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { modalsMessage } from "../../utils/modalsMessage/modalsMessage";
import ModalStyled from "./ModalStyled";
import { hideModalActionCreator } from "../../store/ui/uiSlice";
import { useNavigate } from "react-router-dom";

const Modal = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  const handleHideModal = () => {
    navigate(0);

    dispatch(hideModalActionCreator());
  };

  return (
    <ModalStyled onClick={handleHideModal}>
      <article className={`modal ${error && "error"}`}>
        <button className="modal__closeButton">
          <img
            src="/images/closemodal.svg"
            alt="An X to close"
            loading="lazy"
            width="25"
            height="25"
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
