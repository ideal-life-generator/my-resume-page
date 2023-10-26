import { useState } from "react";
import "../styles/GetInTouch.css";
import { BsPerson } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { TiPhoneOutline } from "react-icons/ti";

const initialFormValues = {
  name: "Vlad",
  email: "ideal.life.generator@gmail.com",
  phone: "+380931059510",
  message: "Hi",
};

function GetInTouch(props) {
  const { name, email, phone, message } = props;
  const [form, setForm] = useState(initialFormValues);

  const changeHandler = (event) => {
    const {
      target: { name, value },
    } = event;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    console.log("form submit", form);

    const response = await fetch("http://localhost:8000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();

    console.log("form submit response", data);
  };

  return (
    <>
      <form className="get-in-touch-form">
        <div className="form-icon-container">
          <input
            className="name"
            name="name"
            value={form.name}
            onChange={changeHandler}
            placeholder={name}
            type="text"
          />

          <BsPerson className="form-icon" />
        </div>

        <div className="form-icon-container">
          <input
            className="email"
            type="email"
            name="email"
            value={form.email}
            onChange={changeHandler}
            placeholder={email}
          />

          <TfiEmail className="form-icon" />
        </div>

        <div className="form-icon-container">
          <input
            className="phone"
            name="phone"
            value={form.phone}
            onChange={changeHandler}
            placeholder={phone}
            type="text"
          />

          <TiPhoneOutline className="form-icon" />
        </div>

        <textarea
          className="message"
          name="message"
          value={form.message}
          onChange={changeHandler}
          placeholder={message}
        />

        <button className="submit-button" type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </>
  );
}

export default GetInTouch;
