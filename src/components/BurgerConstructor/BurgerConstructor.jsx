import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState } from "react";
import PropTypes from "prop-types";

function BurgerConstructor(props) {
  const { elements, handleOpenModal, handleCloseModal, isOpen } = props;

  const [isOrderDetailsOpen, setOrderDetails] = useState(false);

  function resetIsOrderDetailsOpen() {
    setOrderDetails(false);
  }

  function openOrderDetails(e) {
    if (handleOpenModal) {
      handleOpenModal();
      setOrderDetails(true);
    }
  }

  return (
    <>
      <div className={styles.box + " pt-25"}>
        <div className={`${styles.scrollContainer} custom-scroll`}>
          <ul className={styles.list}>
            {elements.map((element) => {
              return (
                <li
                  className={`${styles.dragIconConstructorElementWrapper} mb-4`}
                  key={element._id}
                >
                  <DragIcon />

                  <ConstructorElement
                    isLocked={true}
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.bottomElementsWrapper + " mt-10"}>
          <p className="text text_type_digits-medium">610</p>
          <span className="ml-2 mr-10">
            <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={openOrderDetails}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {isOrderDetailsOpen && (
        <Modal
          header={""}
          handleCloseModal={handleCloseModal}
          isOpen={isOpen}
          resetIsOrderDetailsOpen={resetIsOrderDetailsOpen}
        >
          <OrderDetails />
        </Modal>
      )}
      ;
    </>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  elements: PropTypes.array,
  handleOpenModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
