import styles from "../style/Illustration.module.css";

// eslint-disable-next-line react/prop-types,
export default function Illustration({ Image }) {
  return (
    <div className={styles.Illustration}>
      <img src={Image} alt="illustration" />
    </div>
  );
}
