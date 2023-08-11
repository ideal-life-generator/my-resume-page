import "../styles/Link.css";

function Link(props) {
    const { href, name, className } = props;
  return (
    <>
          <a className={className} href={href}>{name}</a>
    </>
  );
}

export default Link;
