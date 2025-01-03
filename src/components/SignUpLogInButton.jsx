import styles from "../style/SignUpLogInButton.module.css";

// eslint-disable-next-line react/prop-types
export default function SignUpLogInButton({ children, ...other }) {
  return (
    <button className={`${styles.SignUpLogInButton} button`} {...other}>
      <b>{children}</b>
    </button>
  );
}
