import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function MenuItems(props) {
  const { current } = props;
  return (
    <div className={`${styles.box} pb-10`}>
      <Tab value="one" active={current === "one"}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"}>
        Начинки
      </Tab>
    </div>
  );
}

export default MenuItems;

MenuItems.propTypes = {
  current: PropTypes.string,
};
