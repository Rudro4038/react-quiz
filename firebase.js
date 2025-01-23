// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-QZo8FgVJwfPdF-xlM3Vp1iXUJv6BkY",
  authDomain: "react-quiz-dev-6d2fa.firebaseapp.com",
  projectId: "react-quiz-dev-6d2fa",
  storageBucket: "react-quiz-dev-6d2fa.firebasestorage.app",
  messagingSenderId: "224345649303",
  appId: "1:224345649303:web:a84d2c1e782764f20139d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATABASE_ID_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
