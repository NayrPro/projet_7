import Card from "./Card";
import Navbar from "./Navbar";
import headerImg from "./img/header-img.jpeg";
import houses from "./logements.json";
import { Link } from "react-router-dom";

function Root() {
  const housesList = houses.map(house => (
    <Link to={`/housing/${house.id}`} key={house.id}>
      <Card cover={house.cover} title={house.title}/>
    </Link>
  ))
  return (
    <div className="homepage">
      <Navbar/>
      <div className="section-img">
        <h1>Chez vous, partout et ailleurs</h1>
        <div className='overlay'></div>
        <img src={headerImg} alt='logo'/>
      </div>
      <div className="cards">
        {housesList}
      </div>
    </div>
  );
}

export default Root;
