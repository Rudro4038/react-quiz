import styles from "../style/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answer() {
  return (
    <>
      <div className={styles.Answers}>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox></Checkbox>
      </div>
    </>
  );
}
