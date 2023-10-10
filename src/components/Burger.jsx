import "../styles/Burger.css";
import classNames from "classnames";

function Burger({ isOpen, toggleOpen }) {
  return (
    <div
      className={classNames({
        open: isOpen,
        "hamburger-icon": true
      })}
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
