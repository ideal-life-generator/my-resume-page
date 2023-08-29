import "../styles/ContactMe.css";

function ContactMe(props) {
  const { name, email, phone, address, mapLink } = props;

  return (
    <>
      <h3 className="contact-me">CONTACT ME</h3>
      <div className="contact-me-information">
        <div>{name}</div>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
        <a href={mapLink} target="_blank">
          {address}
        </a>
      </div>
    </>
  );
}

export default ContactMe;
