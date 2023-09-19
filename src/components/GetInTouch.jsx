import "../styles/GetInTouch.css";
import { BsPerson } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi"
import {TiPhoneOutline} from "react-icons/ti"


function GetInTouch(props) {
  const { name, email, phone, message } = props;
  return (
    <>
      <form className="get-in-touch-form">
        <div className="form-icon-container">
          <input className="name" placeholder={name} type="text" />
          <BsPerson className="form-icon" />
        </div>

        <div className="form-icon-container">
          <input className="email" placeholder={email} type="email" />
          <TfiEmail className="form-icon" />
        </div>

        <div className="form-icon-container">
          <input className="phone" placeholder={phone} type="text" />
          <TiPhoneOutline className="form-icon" />
        </div>

        <textarea className="message" placeholder={message} />
        <button className="submit-button">Submit</button>
      </form>
    </>
  );
}

export default GetInTouch;
