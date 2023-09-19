import { useState } from "react";
import "../styles/WorkPlace.css";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia"; 
  
function WorkPlace(props) {
  const { time, place, position, list } = props;
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    //console.log('Hello')
      setIsOpen(!isOpen);

  }
  //console.log(props);

  
    return (
      <div className="work_place">
        <div className="click-area"onClick={onClick} >
          <div className="open-close-animation-container">
            <div className="time">{time}</div>
            {isOpen && <LiaEyeSolid />}
            {!isOpen && <LiaEyeSlash className="closed-eye" />}
          </div>

          <div className="place-position">
            <div className="position">{position}</div>
            <div className="place">{place}</div>
          </div>
        </div>

        <div className={isOpen ? "description open" : "description"}>
          <ul>
            {list.map((el) => (
              <li key={el}>
                <div className="disk"></div>
                <div className="text">{el}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

  
}

export default WorkPlace;
