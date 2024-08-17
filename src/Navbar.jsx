import logo from './img/logo.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
               <img src={logo} alt='logo'/>
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