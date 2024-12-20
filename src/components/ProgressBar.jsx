import styles from "../style/ProgressBar.module.css";
import { Link } from "react-router-dom";
export default function ProgressBar() {
  return (
    <div className={styles.progresssbar}>
      <div className={styles.button}>
        <button type="button" className="material-icons-outlined">
          arrow_back
        </button>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/results">
        <div className={` ${styles.next}`}>
          {/* <span>Next Question</span> */}
          <div className={styles.button}>
            <button type="button" className="material-icons-outlined">
              arrow_forward
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
