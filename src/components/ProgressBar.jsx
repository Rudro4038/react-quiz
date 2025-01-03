/* eslint-disable react/prop-types */
import styles from "../style/ProgressBar.module.css";

// import { Link } from "react-router-dom";
export default function ProgressBar({
  handleRightButton,
  handleLeftButton,
  parcentage,
}) {
  // console.log(parcentage);
  return (
    <div className={styles.progresssbar}>
      <div className={styles.button}>
        <button
          type="button"
          className="material-icons-outlined"
          onClick={handleLeftButton}
        >
          arrow_back
        </button>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${parcentage}%` }}
          ></div>
        </div>
      </div>
      <div className={` ${styles.next}`}>
        {/* <span>Next Question</span> */}
        <div className={styles.button}>
          <button
            type="button"
            className="material-icons-outlined"
            onClick={handleRightButton}
          >
            arrow_forward
          </button>
        </div>
      </div>
    </div>
  );
}
