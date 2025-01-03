import classes from "../style/Account.module.css";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Account() {
  const { logout, currentUser } = useAuth();
  // console.log(currentUser);

  return (
    <div className={classes.accountContainer}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currentUser ? (
        <Link to="" className={classes.names}>
          {currentUser.displayName}
        </Link>
      ) : (
        <Link to="./signUp" className={classes.names}>
          Sign In
        </Link>
      )}
      {currentUser ? (
        <span
          className="material-icons-outlined"
          title="Logout"
          onClick={logout}
        >
          {" "}
          logout{" "}
        </span>
      ) : null}
    </div>
  );
}
