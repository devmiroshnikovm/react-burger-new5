import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BurgerIngredient(props) {
  const { ingredient, handleOnSelect } = props;

  function handleOnclick() {
    handleOnSelect(ingredient);
  }
  return (
    <>
      <li className={styles.ingredient} onClick={handleOnclick}>
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
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
  ingredient: PropTypes.object,
  handleOnSelect: PropTypes.func,
};
