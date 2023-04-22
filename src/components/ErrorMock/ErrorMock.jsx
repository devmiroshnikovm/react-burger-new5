import styles from "./styles.module.css";
function ErrorMock(props) {
  const { error } = props;
  return (
    <div className={styles.box}>
      <p className="text text_type_main-large">{error}</p>
    </div>
  );
}

export default ErrorMock;
