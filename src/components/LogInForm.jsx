import { useState } from "react";
import styles from "../style/LogInForm.module.css";
import Checkbox from "./Checkbox";
import Form from "./Form";
import SignUpLogInButton from "./SignUpLogInButton";
import TextInput from "./TextInput";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault(); // Prevents the default form submission
    //console.log("Login");

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.code);

      switch (err.code) {
        case "auth/invalid-email":
          setError("Invalid email format.");
          break;
        case "auth/user-disabled":
          setError("User account is disabled.");
          break;
        case "auth/user-not-found":
          setError("No user found with this email.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/invalid-credential":
          setError("Email do not match password.");
          break;
        case "auth/network-request-failed":
          setError("Check your connection.");
          break;
        default:
          setError("Unknown error occurred.");
      }

      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <h2 className={styles.h2}> Sign In </h2>
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <SignUpLogInButton disabled={loading} type="submit">
        Log In
      </SignUpLogInButton>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don&apos;t have an account? <a href="/SignUp">Sign Up</a> instead.
      </div>
    </Form>
  );
}
