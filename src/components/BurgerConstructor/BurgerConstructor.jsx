import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";

import { setIngredientToBurger } from "../../services/actions/selectedIngredients";

import { getSelectedElementsSelector } from "../../services/actions/selectors/getSelectedElementsSelector";
import { getTotalPriceSelector } from "../../services/actions/selectors/getTotalPriceSelector";
import { getIngredientsForPostAPISelector } from "../../services/actions/selectors/getIngredientsForPostAPISelector";
import { postNewOrder } from "../../services/api/index";

import { setCurrentOder } from "../../services/actions/orderDetails";

import { getOrderNumberSelector } from "../../services/actions/selectors/getOrderNumberSelector";

import { useMemo } from "react";
import { useDrag } from "react-dnd";
import DraggableIngradient from "../DraggableIngradient/DraggableIngradient";
import update from "immutability-helper";
import { updateSelectedElements } from "../../services/actions/selectedIngredients";

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

  /*  const result = {
    ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa0943"],
  }; */

  const ifSelectedElemetnsLength = ingredientsForPostAPI.ingredients.length;

  async function handleButtonClick() {
    console.log("handleButtonClick");
    // if selected ingredients
    if (ifSelectedElemetnsLength > 0) {
      const response = await postNewOrder(ingredientsForPostAPI);

      if (response.success) {
        dispatch(setCurrentOder(response));
      }
    }
  }

  // modal OrderDetails
  const oderNumber = useSelector(getOrderNumberSelector);

  // подписываемся на новые данные из нового хранилища storegeConstructor
  const dispatch = useDispatch();

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

  ///////////////////////

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(`dragIndex: ${dragIndex}, hoverIndex: ${hoverIndex}`);

      const updatedElements = update(selectedElements, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, selectedElements[dragIndex]],
        ],
      });

      dispatch(updateSelectedElements(updatedElements));
    },
    [selectedElements, dispatch]
  );

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
            {elements.map((element, index) => {
              return (
                <DraggableIngradient
                  key={element.dropUniqID}
                  element={element}
                  index={index}
                  moveCard={moveCard}
                />
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
            disabled={ifSelectedElemetnsLength === 0}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {oderNumber && (
        <Modal
          header={""}
          handleCloseModal={handleCloseModal}
          isOpen={false}
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
