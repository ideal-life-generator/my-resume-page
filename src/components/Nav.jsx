import Link from "./Link";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <nav className="menu">
        <a href='#'>O</a>
        <div className="list-menu">
          <Link className='nav-link' href="#bio" name="BIOGRAPHY" />
          <Link href="#expertise" name="EXPERTISE" />
          <Link href="#skills" name="SKILLS" />
          <Link href="#get-in-touch" name="GET IN TOUCH" />
          <Link href="#" name="PROJECTS" />
        </div>
        <Link href="#" name="Download my resume" />
      </nav>
    </>
  );
}

export default Nav;
