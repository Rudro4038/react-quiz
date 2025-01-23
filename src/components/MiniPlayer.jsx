import styles from "../style/MiniPlayer.module.css";
import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

// eslint-disable-next-line react/prop-types
export default function MiniPlayer({ ID, title }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(true);

  const handleToggle = () => {
    if (status) {
      buttonRef.current.classList.remove(styles.floatingBtn);
      setStatus(false);
    } else {
      buttonRef.current.classList.add(styles.floatingBtn);
      setStatus(true);
    }
  };

  return (
    <>
      <div
        className={`${styles.miniPlayer} ${styles.floatingBtn}`}
        onClick={handleToggle}
        ref={buttonRef}
      >
        <span className={`material-icons-outlined ${styles.open}`}>
          {" "}
          play_circle_filled{" "}
        </span>
        <span
          className={`material-icons-outlined ${styles.close}`}
          onClick={handleToggle}
        >
          {" "}
          close{" "}
        </span>
        <ReactPlayer
          className={styles.playerr}
          url={`https://www.youtube.com/watch?v=${ID}`}
          width="300px"
          height="200px"
          controls={true}
          playing={!status}
        />
        <p>{title}</p>
      </div>
    </>
  );
}
