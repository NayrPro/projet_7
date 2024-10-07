import logo from './img/logo.svg'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt='logo'/>
                </Link>
            </div>
            <nav>
                <div className="navlinks">
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Accueil
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            A propos
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;