import styles from "./styles.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ErrorMock from "../ErrorMock/ErrorMock";

import { createPortal } from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

function resetAllStatesAfterClosingModal() {}

function Modal(props) {
  const { header, onClose } = props;

  const [domReady, setDomReady] = useState(false);

  /* закрытие модального окна */
  function handleCloseButtonClick() {
    onClose();
  }

  // по escape
  function handlePopupByEscape(event) {
    if (event.code === "Escape") {
      onClose();
    }
  }

  /* закрытие модального окна */
  useEffect(() => {
    // Код эффекта
    setDomReady(true);
    document.addEventListener("keydown", handlePopupByEscape);

    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
      document.removeEventListener("keydown", handlePopupByEscape);
    };
  }, []);

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

        <ModalOverlay onClose={onClose} />
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
};
