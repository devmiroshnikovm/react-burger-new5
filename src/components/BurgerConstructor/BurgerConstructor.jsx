import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { setIngredientToBurger } from "../../services/actions/selectedIngredients";
import { deleteIngredientToBurger } from "../../services/actions/selectedIngredients";

import { getSelectedElementsSelector } from "../../services/actions/selectors/getSelectedElementsSelector";
import { getTotalPriceSelector } from "../../services/actions/selectors/getTotalPriceSelector";
import { getIngredientsForPostAPISelector } from "../../services/actions/selectors/getIngredientsForPostAPISelector";
import { postNewOrder } from "../../services/api/index";

import { useMemo } from "react";

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

  // POST
  const ingredientsForPostAPI = useSelector(getIngredientsForPostAPISelector);

  async function handleButtonClick() {
    const response = await postNewOrder(ingredientsForPostAPI);
    console.log(response);
  }

  // подписываемся на новые данные из нового хранилища storegeConstructor
  const dispatch = useDispatch();

  // handle button click
  const handeOnDeleteIngredient = (element) => {
    dispatch(deleteIngredientToBurger(element));
  };

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

  // write selection
  const selectedElements = useSelector(getSelectedElementsSelector);
  const totalPrice = useSelector(getTotalPriceSelector);

  const memoizedTotalPrice = useMemo(() => {
    // что мне тут делать?
  }, [selectedElements]);

  // передаем элементы из нового хранилища в elements
  const elements = selectedElements;

  const borderColor = isHover ? "lightgreen" : "transparent";

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
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <span className="ml-2 mr-10">
            <CurrencyIcon type="primary" />
          </span>
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={handleButtonClick}
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
