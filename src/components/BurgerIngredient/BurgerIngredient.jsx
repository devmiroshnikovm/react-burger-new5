import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

//redux
import { useSelector, useDispatch } from "react-redux";

//import actions
import { setCurrentIngredient } from "../../services/actions/currentIngradients";

import { useDrag } from "react-dnd";

function BurgerIngredient(props) {
  const { ingredient } = props;

  const dispatch = useDispatch();

  const [{ isDrag }, dragRef] = useDrag({
    type: "ingredients",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  function handleOnclick() {
    dispatch(setCurrentIngredient(ingredient));
  }

  const countView = (
    <div className={styles.counterWrapper}>
      <span className={`${styles.counter} text text_type_main-default`}>
        {ingredient.count}
      </span>
    </div>
  );
  const view = (
    <>
      <li className={styles.ingredient} onClick={handleOnclick} ref={dragRef}>
        {ingredient.count > 0 && countView}
        <img
          src={ingredient.image}
          alt={ingredient.name}
          className="pt-6"
        ></img>
        <div className={styles.priceIconWrapper}>
          <span className={`${styles.price} text text_type_main-default`}>
            {ingredient.price}
          </span>
          <CurrencyIcon />
        </div>
        <p className={`${styles.label} text text_type_main-default`}>
          {ingredient.name}
        </p>
      </li>
    </>
  );

  return view;
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
};
