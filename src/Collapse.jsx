import { useEffect, useState } from "react";
import downArrow from "./img/arrow-down.svg";
import upArrow from "./img/arrow-up.svg";

function Collapse({title, description}) {
  const [dropdown, setCollapse] = useState("hide");
  const [arrow, setArrow] = useState(upArrow);
  
  const arrowChange = () => {
    dropdown === "show" ? setCollapse("hide") : setCollapse("show");
  }
  
  useEffect(()=>{
    dropdown === "show" ? setArrow(downArrow) : setArrow(upArrow);
  },[dropdown])

  return (
      <div className="dropdown" onClick={arrowChange}>
        <div className="dropdown__title">
          <p>{title}</p>
          <img src={arrow} alt={dropdown}/>
        </div>
        <div className="dropdown__text" style={{display: (dropdown === "show") ? 'none' : 'block'}}>
          {description}
        </div>
      </div>
  )
}

export default Collapse