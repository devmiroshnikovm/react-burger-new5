import styles from "./styles.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getElementsFromAPIUpdatedCountsSelector } from "../../services/actions/selectors/getElementsFromAPIUpdatedCountsSelector";

function ProductContainer(props) {
  const {} = props;

  const updatedBurgerIngredients = useSelector(
    getElementsFromAPIUpdatedCountsSelector
  );

  const elements = updatedBurgerIngredients;

  return (
    <>
      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium">Булки</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "bun") {
              return (
                <BurgerIngredient ingredient={element} key={element._id} />
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "sauce") {
              return (
                <BurgerIngredient ingredient={element} key={element._id} />
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "main") {
              return (
                <BurgerIngredient ingredient={element} key={element._id} />
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductContainer;

ProductContainer.propTypes = {};
