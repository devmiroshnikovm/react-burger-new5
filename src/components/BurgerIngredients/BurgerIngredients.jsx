import styles from "./styles.module.css";
import MenuItems from "../MenuItems/MenuItems";
import ProductContainer from "../ProductContainer/ProductContainer";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

import { useState } from "react";
import { useSelector } from "react-redux";

import { deleteCurrentIngredient } from "../../services/actions/currentIngradients";
import { useDispatch } from "react-redux";
import { getCurrentIngredientsSelector } from "../../services/actions/selectors/getCurrentIngredientsSelector";

import PropTypes from "prop-types";

function BurgerIngredients(props) {
  const { elements, ...otherProps } = props;
  const dispatch = useDispatch();

  const ingredient = useSelector(getCurrentIngredientsSelector);

  console.log("ingredient", ingredient);

  function onClose() {
    dispatch(deleteCurrentIngredient());
  }

  return (
    <>
      <div className={styles.box}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <MenuItems {...otherProps} />
        <ProductContainer elements={elements} />
      </div>
      {ingredient && (
        <Modal header={"Детали ингредиента"} onClose={onClose}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  elements: PropTypes.array,
  onClose: PropTypes.func,
};
