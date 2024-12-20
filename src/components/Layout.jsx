import styles from "../style/Layout.module.css";
import Nav from "./Nav";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
