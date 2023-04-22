import styles from "./styles.module.css";
import PropTypes from "prop-types";

function ModalOverlay(props) {
  const { onClose } = props;

  return <div className={styles.backdrop} onClick={onClose}></div>;
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
};
