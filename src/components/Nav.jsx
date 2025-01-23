import logo from "../assets/images/logo-bg.png";
import classes from "../style/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <a href="/home" className={classes.brand}>
            <img src={logo} alt="Learn with sumit logo" />
            <h3>Divine Edu</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
