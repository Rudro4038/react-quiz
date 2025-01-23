/* eslint-disable react/prop-types */
// import image from "../assets/images/wallpaperflare.com_wallpaper.jpg";
import { Link } from "react-router-dom";
import styles from "../style/Video.module.css";

export default function Video({ video }) {
  return (
    <div className={styles.video}>
      <div className={styles.card}>
        <Link to={`/Quiz/${video.youtubeID}`}>
          <div className={styles.imgBox}>
            <img
              src={`https://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`}
              alt=""
            ></img>
          </div>
        </Link>
        <div className={styles.footNote}>
          <b>{video.title}</b>
        </div>
        <div className={styles.description}>
          <a href="/Quiz">
            <i>{video.noq} Questions</i>
          </a>
        </div>
      </div>
    </div>
  );
}
