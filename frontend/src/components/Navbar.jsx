import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.logoText}>ExplodingCine</span>
            </div>

            <div className={styles.links}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                    >Movies
                </NavLink>


                <NavLink
                    to="/forum"
                    className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                    >Forum
                </NavLink>


                <NavLink
                    to="/you"
                    className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                    >You
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;