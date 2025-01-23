import styles from "../style/TextInput.module.css";

// eslint-disable-next-line react/prop-types
export default function TextInput({ icon, ...other }) {
  return (
    <div className={styles.TextInput}>
      <input {...other} />
      <span className="material-icons-outlined">{icon}</span>
    </div>
  );
}
