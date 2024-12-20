import styles from "../style/MiniPlayer.module.css";

export default function MiniPlayer() {
  return (
    <>
      <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
        <span className={`material-icons-outlined ${styles.open}`}>
          {" "}
          play_circle_filled{" "}
        </span>
        <span className={`material-icons-outlined ${styles.close}`}>
          {" "}
          close{" "}
        </span>
        <img src="./images/3.jpg" alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
      </div>
    </>
  );
}
