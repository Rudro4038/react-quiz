import successImage from "../assets/images/success.png";
import Illustration from "../components/Illustration";
import Result from "../components/Result";
import styles from "../style/Results.module.css";

export default function Results() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Left}>
          <h2>
            Your score is <br /> 15 out of 20.
          </h2>
        </div>
        <div className={styles.Right}>
          <Illustration Image={successImage} />
        </div>
      </div>
      <h2 className={styles.h2}>Question Analysis</h2>
      <h4 className={styles.h4}>
        You answered 19 question out of 20 question.
      </h4>
      <hr className={styles.hr} />

      <Result />
      <Result />
      <Result />
      <Result />
      <Result />
    </>
  );
}
