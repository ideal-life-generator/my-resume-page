import "../styles/Link.css";

function Link(props) {
  const { href, name, className } = props;
  return (
    <div
      className={className ? `link-container ${className}` : "link-container"}
    >
      <a className={className} href={href}>
        {name}
      </a>
    </div>
  );
}

export default Link;
