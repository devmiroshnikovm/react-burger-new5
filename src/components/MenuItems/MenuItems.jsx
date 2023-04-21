import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

function MenuItems() {
  return (
    <div className={`${styles.box} pb-10`}>
      <Tab value="one">Булки</Tab>
      <Tab value="two">Соусы</Tab>
      <Tab value="three">Начинки</Tab>
    </div>
  );
}

export default MenuItems;
