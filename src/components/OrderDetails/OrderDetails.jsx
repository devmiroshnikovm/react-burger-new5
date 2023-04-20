import styles from "./styles.module.css";
import imageDone from "../../images/done.svg";
import { getOrderNumberSelector } from "../../services/actions/selectors/getOrderNumberSelector";
import { useSelector } from "react-redux";

function OrderDetails() {
  const oderNumber = useSelector(getOrderNumberSelector);

  return (
    <>
      <div className={styles.modalContaner}>
        <p className="text text_type_digits-large pt-30">{oderNumber}</p>
        <p className="text text text_type_main-default mb-8">
          идентификатор заказа
        </p>
        <img src={imageDone} />
        <p className="text text text_type_main-default mt-15">
          Ваш заказ начали готовить
        </p>

        <p className="text text text_type_main-default mt-2 pb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
}

export default OrderDetails;
