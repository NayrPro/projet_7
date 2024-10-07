import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import errorImg from "./img/404.svg";
import { useEffect, useState } from "react";


function ErrorPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <div className="errorpage">
        <div className="error">
            <img className="error-img" src={errorImg} alt='error'/>
          <div className="error-msg">
          { (windowWidth > 1024) ?
            <p>Oups! La page que vous demandez n'existe pas.</p>
            :
            <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
          }
          </div>
          <div className="error-redirect">
            <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;