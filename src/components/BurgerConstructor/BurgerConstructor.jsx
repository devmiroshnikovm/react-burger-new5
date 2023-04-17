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

  //drug drop
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.ingredients);

  //test
  useEffect(() => {
    // You can filter the data to see only the items with a 'test' board type
    const itemsWithTestBoard = data.filter((item) => item.board === "test");
    console.log(itemsWithTestBoard);
  }, [data]);

  const board = "burgerConstructor";
  let count = 0;

  const [{ isHover }, drop] = useDrop({
    accept: "ingredients",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(itemId) {
      // Отправим экшен с текущим перетаскиваемым элементом и названием доски
      dispatch({
        type: "UPDATE_BOARD",
        _id: itemId.id,
        //...itemId, это целый перетаскиваемый элемент
        board,
        count: count + 1,
      });
    },
  });

  // берем данные из хранилища
  const { ingredientsInBurger } = useSelector(
    (state) => state.ingredientsInBurger
  );
  const elements = ingredientsInBurger;

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
            {data
              .filter((element) => {
                return element.board === board;
              })
              .map((element) => {
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

/* {animals
  // Получим массив животных, соответствующих целевому элементу
  .filter((animal) => {
    return animal.board === board;
  })
  // Отрисуем массив
  .map((animal) => (
    <Item key={animal.id} data={animal} styleIndex={styleIndex} />
  ))} */

/* 
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
  })} */
