import { useEffect, useState } from "react";
import redStar from "./img/red-star.svg"
import greyStar from "./img/grey-star.svg"
import leftArrow from "./img/arrow-left.svg";
import rightArrow from "./img/arrow-right.svg";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router";
import Dropdown from "./Collapse";
import houses from "./logements.json";

const Housing = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imgIndex, setImgIndex] = useState(0);

  const house = houses.find(element => element.id === id);

  useEffect(() => {
    if (!house) {
      navigate("/error"); 
    }
  }, [house, navigate]);

  if (!house) {
    return null; 
  }

  const equipments = house.equipments.map((equipment) => (
    <p key={equipment}>{equipment}</p>
  ));
  
  return (
    <div className="housing">
      <div className="carrousel">
        <img src={house.pictures[imgIndex]} alt='house' className="carrousel__img"/>
        <img 
          src={leftArrow} 
          alt="previous" 
          className="carrousel__arrow arrow-left" 
          onClick={() => (imgIndex === 0) ? setImgIndex(house.pictures.length - 1) : setImgIndex(imgIndex-1)}
          style={{display: (house.pictures.length === 1) ? 'none' : 'block'}}
        />
        <img 
          src={rightArrow} 
          alt="next" 
          className="carrousel__arrow arrow-right" 
          onClick={() => (imgIndex === (house.pictures.length - 1)) ? setImgIndex(0) : setImgIndex(imgIndex+1)}
          style={{display: (house.pictures.length === 1) ? 'none' : 'block'}}
        />
        <p 
          className="carrousel__paging"
          style={{display: (house.pictures.length === 1) ? 'none' : 'block'}}
        >
          {(imgIndex+1)+"/"+house.pictures.length}
        </p>
      </div>
      <div className="house-infos">
        <div className="house-description">
          <div className="house-description__text">
            <h1 className="house-description__text__title">{house.title}</h1>
            <p className="house-description__text__location">{house.location}</p>
          </div>
          <div className="house-description__tags">
            {
              house.tags.map(tag => (
                <div className="house-description__tags__tag" key={tag}>
                  <span>{tag}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="house-details">  
          <div className="house-details__owner">
            <p className="house-details__owner__name">{house.host.name}</p>
            <div className="house-details__owner__photo">
              <img src={house.host.picture} alt={house.host.name} />
            </div>
          </div>
          <div className="house-details__ratings">
            {
              house.rating > 0 && Array.from(Array(parseInt(house.rating, 10)), (e, i) => {
                return <img src={redStar} alt="red star" key={i}/>
              })
            }
            {
              house.rating < 5  && Array.from(Array(5 - parseInt((house.rating), 10)), (e, i) => {
                return <img src={greyStar} alt="grey star" key={i}/>
              })
            }
          </div>
        </div>
      </div>
      <div className="house-dropdowns">
        <Dropdown 
          title={"Description"} 
          description={
            <p>{house.description}</p>
          }
        />
        <Dropdown 
          title={"Équipements"} 
          description={equipments}
        />
      </div>
    </div>
  );
}

export default Housing;
