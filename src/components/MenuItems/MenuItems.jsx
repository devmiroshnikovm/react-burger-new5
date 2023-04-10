import styles from "./styles.module.css";

function MenuItems() {
  return (
    <div className={`${styles.box} pb-10`}>
      <p className="text text_type_main-default">Булки</p>
      <p className="text text_type_main-default">Соусы</p>
      <p className="text text_type_main-default">Начинки</p>
    </div>
  );
}

export default MenuItems;
