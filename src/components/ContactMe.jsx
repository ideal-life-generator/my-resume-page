

function ContactMe(props) {
    const { name, email, phone, address, mapLink } = props;
    
    return (
      <>
        <h3>Contact me</h3>
        <div>{name}</div>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
        <a href={mapLink} target="_blank">
          {address}
        </a>
      </>
    );
}

export default ContactMe;