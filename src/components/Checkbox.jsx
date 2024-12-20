import styles from "../style/Checkbox.module.css";

export default function Checkbox() {
  return (
    <>
      <label className={styles.answer} htmlFor="option1">
        <input type="checkbox" id="option1" />A New Hope 1
      </label>
    </>
  );
}
