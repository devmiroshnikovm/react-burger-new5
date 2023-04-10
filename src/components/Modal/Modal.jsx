import styles from "./styles.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ErrorMock from "../ErrorMock/ErrorMock";

import { createPortal } from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
  const {
    header, //header
    handleCloseModal, // меняет isOpen state в App
    isOpen, // state в App,  if (!isOpen) return null; - это ниже в коде перед порталом
    resetCurrentIngredient, // этот props прилетает из BurgerIngredients - тут сбрасываем state currentIngredient в BurgerIngredients
    resetIsOrderDetailsOpen, // этот props прилетает из Burgerconstractor - тут сбрасываем state isOrderDetailsOpen в Burgerconstractor
  } = props;

  const [domReady, setDomReady] = useState(false);

  /* закрытие модального окна */

  function handleCloseButtonClick() {
    resetAllStatesAfterClosingModal();
  }

  function resetAllStatesAfterClosingModal() {
    if (handleCloseModal) {
      handleCloseModal();
    }
    if (resetCurrentIngredient) {
      resetCurrentIngredient();
    }
    if (resetIsOrderDetailsOpen) {
      resetIsOrderDetailsOpen();
    }
  }

  // по escape
  function handlePopupByEscape(event) {
    if (event.code === "Escape") {
      if (handleCloseModal) {
        handleCloseModal();
      }
    }
  }

  /* закрытие модального окна */

  useEffect(() => {
    // Код эффекта
    setDomReady(true);
    console.log("Mounted");
    document.addEventListener("keydown", handlePopupByEscape);

    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
      document.removeEventListener("keydown", handlePopupByEscape);
    };
  }, []);

  if (!isOpen) return null;

  return domReady ? (
    createPortal(
      <>
        <div className={styles.popupContainer}>
          <div className={styles.headerCloseWrapper}>
            <p className="text text_type_main-large">{header}</p>
            <CloseIcon onClick={handleCloseButtonClick} />
          </div>
          <div>{props.children}</div>
        </div>

        <ModalOverlay
          resetAllStatesAfterClosingModal={resetAllStatesAfterClosingModal}
        />
      </>,
      modalRoot
    )
  ) : (
    <ErrorMock />
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  handleCloseModal: PropTypes.func,
  isOpen: PropTypes.bool,
  resetCurrentIngredient: PropTypes.func,
  resetIsOrderDetailsOpen: PropTypes.func,
};
