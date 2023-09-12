
import "../styles/Burger.css";

function Burger(props) {
    const { isOpen, toggleOpen } = props;

  return (
    <div
      className={isOpen ? "open hamburger-icon" : "hamburger-icon"}
      onClick={toggleOpen}
    >
      <div className="icon-container">
        <div className="icon-1"></div>
        <div className="icon-2"></div>
        <div className="icon-3"></div>
      </div>
    </div>
  );
}

export default Burger;
