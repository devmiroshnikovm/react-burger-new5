import styles from "./styles.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  const { resetAllStatesAfterClosingModal } = props;

  return (
    <div
      className={styles.backdrop}
      onClick={resetAllStatesAfterClosingModal}
    ></div>
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  resetAllStatesAfterClosingModal: PropTypes.func,
};
