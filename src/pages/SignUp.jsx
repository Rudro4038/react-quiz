import Form from "../components/Form";
import Illustration from "../components/Illustration";
import SignUpLogInButton from "../components/SignUpLogInButton";
import TextInput from "../components/TextInput";
import styles from "../style/SignUp.module.css";

import logInImage from "../assets/images/login.svg";
import signUPImage from "../assets/images/signup.svg";

// eslint-disable-next-line react/prop-types
export default function SignUp({ signUpflag }) {
  console.log(signUpflag);

  const signUpForm = (
    <>
      <TextInput type="text" placeholder="Enter name" icon="person"></TextInput>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
      ></TextInput>
    </>
  );

  const logInForm = (
    <>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
      ></TextInput>
    </>
  );

  return (
    <div className={styles.SignUp}>
      <div className={styles.Row}>
        <div className={`${styles.Coloumn} ${styles.Coloumn1}`}>
          <Illustration Image={signUpflag ? signUPImage : logInImage} />
        </div>
        <div className={styles.Coloumn}>
          <div className={styles.formContainer}>
            <h2>{signUpflag ? "Sign up" : "Sign In"}</h2>
            <Form>{signUpflag ? signUpForm : logInForm}</Form>
            <SignUpLogInButton>
              {signUpflag ? "Register" : "Log In"}
            </SignUpLogInButton>

            <div className="info">
              Already have an account? <a href="/login">Login</a> instead.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
