import styles from "../style/Form.module.css";

// eslint-disable-next-line react/prop-types
export default function Form({ children, ...other }) {
  return (
    <form className={styles.Form} action="#" {...other}>
      {children}
    </form>
  );
}
