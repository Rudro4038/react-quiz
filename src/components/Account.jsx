import classes from "../style/Account.module.css";

export default function Account() {
  return (
    <div className={classes.accountContainer}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="./signUp">Sign In</a>
    </div>
  );
}
