import logo from './img/logo.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt='logo'/>
                </Link>
            </div>
            <div className="navlinks">
                <div>
                    <Link to="/">Accueil</Link>
                </div>
                <div>
                    <Link to="/about">A propos</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;