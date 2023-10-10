import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-name">LET'S WORK TOGETHER</div>
      <div className="contacts">
        <div>I'm available at</div>
        <div className="underline-container">
          <a href="mailto:olgaorlova241@gmail.com" className="underline">
            olgaorlova241@gmail.com
          </a>
        </div>
        <div className="underline-container">
          <a href="tel:12334567" className="underline">
            12345678
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
