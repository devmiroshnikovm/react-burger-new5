import styles from "./styles.module.css";
import BurgerIngredient from "../BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getElementsFromAPIUpdatedCountsSelector } from "../../services/actions/selectors/getElementsFromAPIUpdatedCountsSelector";
import { useRef } from "react";

function ProductContainer(props) {
  const { setCurrent } = props;

  const updatedBurgerIngredients = useSelector(
    getElementsFromAPIUpdatedCountsSelector
  );

  const elements = updatedBurgerIngredients;

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const scrollContainerRef = useRef(null);

  function handleOnscroll() {
    const topScrollContainerRef =
      scrollContainerRef.current.getBoundingClientRect().top;
    const topOne = one.current.getBoundingClientRect().top;
    const topTwo = two.current.getBoundingClientRect().top;
    const topThree = three.current.getBoundingClientRect().top;

    const oneX = topOne - topScrollContainerRef;
    const twoX = topTwo - topScrollContainerRef;
    const threeX = topThree - topScrollContainerRef;

    const tabs = [
      {
        name: "one",
        coordinates: oneX,
      },
      {
        name: "two",
        coordinates: twoX,
      },
      {
        name: "three",
        coordinates: threeX,
      },
    ];

    const onlyGreaterZero = tabs.filter((element) => {
      return element.coordinates >= 0;
    });

    const currentTab = onlyGreaterZero.reduce((acc, currentValue) => {
      if (acc.coordinates < currentValue.coordinates) {
        return acc;
      } else {
        return currentValue;
      }
    });

    const currentTabName = currentTab.name;
    setCurrent(currentTabName);

    //two.current.scrollIntoView(true);
  }
  return (
    <>
      <div
        className={`${styles.scrollContainer} custom-scroll`}
        onScroll={handleOnscroll}
        ref={scrollContainerRef}
      >
        <p className="text text_type_main-medium">Булки</p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "bun") {
              return (
                <BurgerIngredient ingredient={element} key={element._id} />
              );
            }
          })}
          <div ref={one}></div>
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
          <div ref={two}></div>
        </ul>
        <p className="text text_type_main-medium" ref={three}>
          Начинки
        </p>
        <ul className={styles.container}>
          {elements.map((element) => {
            if (element.type === "main") {
              return (
                <BurgerIngredient ingredient={element} key={element._id} />
              );
            }
          })}
        </ul>
        <div ref={three}></div>
      </div>
    </>
  );
}

export default ProductContainer;

ProductContainer.propTypes = {
  setCurrent: PropTypes.func,
};
