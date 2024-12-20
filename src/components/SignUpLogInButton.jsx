import styles from "../style/SignUpLogInButton.module.css";

// eslint-disable-next-line react/prop-types
export default function SignUpLogInButton({ children }) {
  return (
    <button className={`${styles.SignUpLogInButton} button`}>
      <b>{children}</b>
    </button>
  );
}
