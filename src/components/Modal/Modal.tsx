import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import ModalStyled from "./ModalStyled";
import { hideModalActionCreator } from "../../store/ui/uiSlice";

const Modal = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const {
    isError,
    message,
    image: { src, alt },
  } = useAppSelector(({ ui: { modal } }) => modal);

  const handleHideModal = () => {
    scrollTo(0, 0);
    dispatch(hideModalActionCreator());
  };

  return (
    <ModalStyled onClick={handleHideModal}>
      <article className={`modal ${isError && "error"}`}>
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
          src={src}
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
