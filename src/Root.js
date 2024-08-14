import logo from './sass/img/logo.svg'
import headerImg from "./sass/img/header-img.jpeg";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div>
      <div className="header">
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
      <div className="section-img">
        <h1>Chez vous, partout et ailleurs</h1>
        <div className='overlay'></div>
        <img src={headerImg} alt='logo'/>
      </div>
      <div className="cards">
        <div className="card">
          <p>Titre de la location</p>
        </div>
        <div className="card">
          <p>Titre de la location</p>
        </div>
        <div className="card">
          <p>Titre de la location</p>
        </div>
        <div className="card">
          <p>Titre de la location</p>
        </div>
        <div className="card">
          <p>Titre de la location</p>
        </div>
        <div className="card">
          <p>Titre de la location</p>
        </div>
      </div>
    </div>
  );
}

export default Root;
