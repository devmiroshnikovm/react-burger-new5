import styles from "./styles.module.css";
import MenuItems from "../MenuItems/MenuItems";
import ProductContainer from "../ProductContainer/ProductContainer";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

import { useState } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

function BurgerIngredients(props) {
  const { elements, handleOpenModal, handleCloseModal, isOpen, ...otherProps } =
    props;

  //const [currentIngredient, setCurrentIngredient] = useState(null); было раньше
  // читаем из redux
  const { currentIngredients } = useSelector(
    (state) => state.currentIngredients
  );

  console.log("currentIngredients:", currentIngredients);

  function handleOnSelect(ingredient) {
    //setCurrentIngredient(ingredient);
    //handleOpenModal();
  }

  function resetCurrentIngredient() {
    //setCurrentIngredient(null);
  }

  return (
    <>
      <pre>
        {currentIngredients[0] &&
          JSON.stringify(currentIngredients[0], null, 2)}
      </pre>
      <div className={styles.box}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <MenuItems {...otherProps} />
        <ProductContainer
          elements={elements}
          handleOnSelect={handleOnSelect}
          handleOpenModal={handleOpenModal}
        />
      </div>
      {currentIngredients && (
        <Modal
          header={"Детали ингредиента"}
          handleCloseModal={handleCloseModal}
          isOpen={isOpen}
          resetCurrentIngredient={resetCurrentIngredient}
        >
          <IngredientDetails ingredient={currentIngredients} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  elements: PropTypes.array,
  handleOpenModal: PropTypes.func,
  handleCloseModal: PropTypes.func,
  isOpen: PropTypes.bool,
};
