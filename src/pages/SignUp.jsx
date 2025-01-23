import logInImage from "../assets/images/login.svg";
import signUPImage from "../assets/images/signup.svg";
import Illustration from "../components/Illustration";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import styles from "../style/SignUp.module.css";

// eslint-disable-next-line react/prop-types
export default function SignUp({ signUpflag }) {
  // console.log(signUpflag);

  return (
    <div className={styles.SignUp}>
      <div className={styles.Row}>
        <div className={`${styles.Coloumn} ${styles.Coloumn1}`}>
          <Illustration Image={signUpflag ? signUPImage : logInImage} />
        </div>
        <div className={styles.Coloumn}>
          <div className={styles.formContainer}>
            {signUpflag ? <SignUpForm /> : <LogInForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
