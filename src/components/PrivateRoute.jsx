import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PrivateRoute({ element, ...other }) {
  const { currentUser } = useAuth();
  // console.log(element);

  return currentUser ? element : <Navigate to="/login" />;
}
