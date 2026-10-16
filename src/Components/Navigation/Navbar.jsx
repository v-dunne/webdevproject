import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <Link className={styles.logo} to="/">
        Campus Food
      </Link>

      <div className={styles.links}>
        <Link className={styles.link} to="/"> Home </Link>
        <Link className={styles.link} to="/Profile/1"> Profile </Link>
      </div>
    </nav>
  );
}

export default Navbar;