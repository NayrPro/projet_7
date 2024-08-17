import Navbar from "./Navbar";
import headerImg from "./img/header-img.jpeg";

function Root() {
  return (
    <div>
      <Navbar/>
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
