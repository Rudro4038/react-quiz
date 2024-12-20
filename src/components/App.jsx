/*import Results from "../pages/Results";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import "../style/App.css";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <SignUp signUpflag={false} />
        <Quiz />
        <Results />
      </Layout>
    </>
  );
}

export default App;
*/

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
// import { AuthProvider } from "../contexts/AuthContext";
import Home from "../pages/Home";
import "../style/App.css";
import Layout from "./Layout";
// import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Results from "../pages/Results";
import Signup from "../pages/Signup";
import { AuthProvider } from "../context/AuthContext";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup signUpflag={true} />} />
            <Route path="/login" element={<Signup signUpflag={false} />} />
            <Route path="/results" element={<Results />} />
            <Route path="/quiz" element={<Quiz />} />

            {/* <PublicRoute exact path="/login" component={Login} /> */}

            {/* <PrivateRoute exact path="/quiz/:id" component={Quiz} />
          <PrivateRoute exact path="/result/:id" component={Results} /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
