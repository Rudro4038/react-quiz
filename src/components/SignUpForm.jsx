import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "../style/SignUpForm.module.css";
import Checkbox from "./Checkbox";
import Form from "./Form";
import SignUpLogInButton from "./SignUpLogInButton";
import TextInput from "./TextInput";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    }

    //console.log("Clicked!@!");

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);

      // Map Firebase error codes to user-friendly messages
      let errorMessage = "Failed to create an account!";
      switch (err.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email address. Please enter a valid email.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email is already in use. Try logging in instead.";
          break;
        case "auth/weak-password":
          errorMessage =
            "Password is too weak. Please choose a stronger password.";
          break;
        case "auth/operation-not-allowed":
          errorMessage = "Account creation is not allowed at this time.";
          break;
        default:
          errorMessage = "An unexpected error occurred. Please try again.";
      }

      setLoading(false);
      setError(errorMessage); // Set a specific error message
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className={styles.h2}> Sign Up </h2>

      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextInput>
      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>

      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />
      <SignUpLogInButton disabled={loading} type="submit">
        Register
      </SignUpLogInButton>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
