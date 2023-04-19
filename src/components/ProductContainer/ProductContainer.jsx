import styles from "./styles.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function ProductContainer(props) {
  const {
    elements_old,
    handleOnSelect,
    handleOpenModal,
    isOpen,

    ...otherProps
  } = props;

  // берем данные из хранилища
  const { data, dataRequest, dataFailed } = useSelector(
    (state) => state.ingredients

    // получить доступ
    // взять массив из конструктора с уникальными id
    // создать новый массив newData c кол-вом
  );

  /*
  const { selectedIngredients } = useSelector(
    (state) => {
      state.selectedIngredients;
    } */

  const getElementsForConstructorWithCounts = (state) => {
    const constructorItemsArray = state.selectedIngredients.selectedIngredients;
    const burgerIngredients = state.ingredients.data; // array from API

    const updatedBurgerIngredients = burgerIngredients.reduce(
      (accumulator, itemA) => {
        const count = constructorItemsArray.filter(
          (itemB) => itemB._id === itemA._id
        ).length;

        accumulator.push({ ...itemA, count });
        return accumulator;
      },
      []
    );

    return updatedBurgerIngredients;
  };

  const updatedBurgerIngredients = useSelector(
    getElementsForConstructorWithCounts
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
                <BurgerIngredient
                  ingredient={element}
                  key={element._id}
                  handleOnSelect={handleOnSelect}
                  handleOpenModal={handleOpenModal}
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
                  handleOpenModal={handleOpenModal}
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
                  handleOpenModal={handleOpenModal}
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
