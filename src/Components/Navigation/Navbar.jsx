import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../Services/AuthService.js";
import styles from "./Navbar.module.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Unable to log out. Please try again.");
    }
  };

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <Link className={styles.logo} to="/">
        Campus Food
      </Link>

      <div className={styles.links}>
        <Link className={styles.link} to="/"> Home </Link>
        <Link className={styles.link} to="/Profile/1"> Profile </Link>
        <button className={styles.link} type="button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;