import Collapse from "./Collapse";
import aboutImg from "./img/about-img.jpeg";
import Navbar from "./Navbar";
import aboutTxt from "./aboutText.json";

function About() {
    return (
      <div className="about">
        <div className="section-img">
          <div className='overlay'></div>
          <img src={aboutImg} alt='about'/>
        </div>
        {
          aboutTxt.map(about =>
            <Collapse key={about.title} title={about.title} description={<p>{about.description}</p>} />
          )
        }
      </div>
    );
  }
  
  export default About;