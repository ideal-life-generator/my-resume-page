import { useState } from "react";
import "../styles/WorkPlace.css";

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
        <div onClick={onClick} className="time">
          {time}
        </div>
        <div className="place-position">
          <div onClick={onClick} className="position">
            {position}
          </div>
          <div onClick={onClick} className="place">
            {place}
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
