import Answers from "../components/Answers";
import styles from "../style/Result.module.css";

export default function Result() {
  return (
    <>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </>
  );
}
