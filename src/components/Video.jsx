import image from "../assets/images/wallpaperflare.com_wallpaper.jpg";
import styles from "../style/Video.module.css";

export default function Video() {
  return (
    <div className={styles.video}>
      <div className={styles.card}>
        <a href="/Quiz">
          <div className={styles.imgBox}>
            <img src={image} alt=""></img>
          </div>
        </a>
        <div className={styles.footNote}>
          <b>John kay</b> <i>7 min read</i>
        </div>
        <div className={styles.description}>
          <a href="/Quiz">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              minima fuga tempore? Quas, deserunt? Laboriosam saepe veniam optio
              ut voluptates officiis corrupti obcaecati nam aut.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
