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

{
  /* <Tab value="one" active={current === "one"} onClick={setCurrent}>
One
</Tab>
<Tab value="two" active={current === "two"} onClick={setCurrent}>
Two
</Tab>
<Tab value="three" active={current === "three"} onClick={setCurrent}>
Three
</Tab> */
}
