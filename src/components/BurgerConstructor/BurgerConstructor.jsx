import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { setIngredientToBurger } from "../../services/actions/selectedIngredients";
import { deleteIngredientToBurger } from "../../services/actions/selectedIngredients";

function BurgerConstructor(props) {
  const { handleOpenModal, handleCloseModal, isOpen } = props;

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

  // подписываемся на новые данные из нового хранилища storegeConstructor
  const dispatch = useDispatch();

  const { selectedIngredients } = useSelector(
    (state) => state.selectedIngredients
  );

  // check if our new storegeConstructor works
  useEffect(() => {
    //console.log(selectedIngredients);
  }, [selectedIngredients]);

  const board = "burgerConstructor";
  let count = 0;

  // drug drop section
  const [{ isHover }, drop] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(setIngredientToBurger(item));
    },
  });

  // drug drop section

  // передаем элементы из нового хранилища в elements
  const elements = selectedIngredients;

  const borderColor = isHover ? "lightgreen" : "transparent";

  const handeOnDeleteIngredient = (element) => {
    console.log(element);
    console.log("handeOnDeleteIngredient");
    dispatch(deleteIngredientToBurger(element));
  };

  return (
    <>
      <div
        className={styles.box + " pt-25"}
        style={{ border: `1px solid ${borderColor}` }}
        ref={drop}
      >
        <div className={`${styles.scrollContainer} custom-scroll`}>
          <ul className={styles.list}>
            {elements.map((element) => {
              // отрисовываем элемент
              // проверяем если элемент булка
              const statusLock = element.type === "bun" ? true : false;

              return (
                <li
                  className={`${styles.dragIconConstructorElementWrapper} mb-4`}
                  key={element.dropUniqID}
                >
                  <DragIcon />

                  <ConstructorElement
                    isLocked={statusLock}
                    text={element.name}
                    price={element.price}
                    thumbnail={element.image}
                    handleClose={() => handeOnDeleteIngredient(element)}
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
