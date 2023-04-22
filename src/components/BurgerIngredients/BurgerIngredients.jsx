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
  const {} = props;
  const dispatch = useDispatch();
  const ingredient = useSelector(getCurrentIngredientsSelector);

  function onClose() {
    dispatch(deleteCurrentIngredient());
  }

  //tabs
  const [current, setCurrent] = useState("one");

  return (
    <>
      <div className={styles.box}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <MenuItems current={current} />
        <ProductContainer setCurrent={setCurrent} />
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
