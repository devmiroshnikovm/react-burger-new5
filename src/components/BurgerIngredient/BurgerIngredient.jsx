import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

//redux
import { useSelector, useDispatch } from "react-redux";

//import actions
import { setCurrentIngredient } from "../../services/actions/currentIngradients";
import { deleteCurrentIngredient } from "../../services/actions/currentIngradients";

function BurgerIngredient(props) {
  const { ingredient, handleOnSelect, handleOpenModal } = props;

  const dispatch = useDispatch();

  function handleOnclick() {
    console.log(ingredient);
    // handleOnSelect(ingredient); // это как было раньше
    // сразу запишем данные в stor
    // записываем в stor
    dispatch(setCurrentIngredient(ingredient));

    /* 
    чтобы открылось окно нужно еще сделать isOpen = true


    const [isOpen, setIsPopupOpen] = useState(false);
    function handleOpenModal() {
    setIsPopupOpen(true);
  }
    */
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
