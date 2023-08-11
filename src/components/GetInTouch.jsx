import ContactMe from "./ContactMe";
import SocialMedia from "./SocialMedia";

function GetInTouch(props) {
  const { name, email, phone, message } = props;
  return (
    <>
      <form>
        <h2 id="get-in-touch">Get in touch</h2>
        <input placeholder={name} type="text" />
        <input placeholder={email} type="email" />
        <input placeholder={phone} type="text" />
        <textarea placeholder={message} />
        <button>Submit</button>
      </form>
      <ContactMe
        name="Olga Geyfman-Orlova"
        email="olgaorlova241@gmail.com"
        phone="+12345566"
        address="5604 Bentwood Trail, Dallas"
        mapLink="https://goo.gl/maps/J9b9H7GxpzwkmWMUA"
      />

      <SocialMedia
        facebook="facebook.com"
        codewars="https://www.codewars.com/users/888yalosinger"
      />
    </>
  );
}

export default GetInTouch;
