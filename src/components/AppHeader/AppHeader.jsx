import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./styles.module.css";

function AppHeader() {
  return (
    <header className={styles.box}>
      <div className={styles.burgerMenuWrapper}>
        <span className={styles.burgerLabelWrapper}>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default ml-2 mr-5">
            Конструктор
          </span>
        </span>

        <span className={`${styles.menuLabelWrapper}  ml-2 mr-5`}>
          <MenuIcon type="primary" />

          <span className="text text_type_main-default ml-2 mr-5">
            Лента заказов
          </span>
        </span>
      </div>

      <Logo />

      <span className={styles.loginLabelWrapper}>
        <ProfileIcon type="primary" />

        <span className="text text_type_main-default ml-2">Личный кабинет</span>
      </span>
    </header>
  );
}

export default AppHeader;
