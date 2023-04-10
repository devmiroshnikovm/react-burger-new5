import styles from "./styles.module.css";
import PropTypes from "prop-types";

function IngredientDetails(props) {
  const { ingredient } = props;
  return (
    <>
      <div className={styles.modalContaner}>
        <img
          src={ingredient.image_large}
          alt={ingredient.name}
          className=""
        ></img>
        <p className="text text text_type_main-default mb-4">
          {ingredient.name}
        </p>
        <div className={styles.modalIngredientsDetailsWrapper + " mt-8 mb-15"}>
          <div className={styles.mIProductDesriptionWrapper + " mr-5"}>
            <p className="text text text_type_main-default">Калории,ккал</p>
            <p className="text text text_type_main-default">
              {ingredient.calories}
            </p>
          </div>

          <div className={styles.mIProductDesriptionWrapper + " mr-5"}>
            <p className="text text text_type_main-default">Белки, г</p>
            <p className="text text text_type_main-default">
              {ingredient.proteins}
            </p>
          </div>

          <div className={styles.mIProductDesriptionWrapper + " mr-5"}>
            <p className="text text text_type_main-default">Жиры, г</p>
            <p className="text text text_type_main-default">{ingredient.fat}</p>
          </div>

          <div className={styles.mIProductDesriptionWrapper}>
            <p className="text text text_type_main-default">Углеводы, г</p>
            <p className="text text text_type_main-default">
              {ingredient.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: PropTypes.object,
};
