import styles from "./styles.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

function ProductContainer(props) {
  const { elements, handleOnSelect, isOpen, ...otherProps } = props;

  return (
    <>
      <div className={`${styles.scrollContainer} custom-scroll`}>
        <p className="text text_type_main-medium">Булки</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "bun") {
              return (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                  handleOnSelect={handleOnSelect}
                  isOpen={isOpen}
                />
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "sauce") {
              return (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                  handleOnSelect={handleOnSelect}
                  isOpen={isOpen}
                />
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "main") {
              return (
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                  handleOnSelect={handleOnSelect}
                  isOpen={isOpen}
                />
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductContainer;

ProductContainer.propTypes = {
  elements: PropTypes.array,
  handleOnSelect: PropTypes.func,
  isOpen: PropTypes.bool,
};

{
  /* <ElementItem elements={elements} /> */
}
