import Link from "./Link";
import Burger from "./Burger";
import "../styles/Nav.css";
import { useEffect, useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [scrolledToElement, setScrolledToElement] = useState("");
  const onScrollHandler = (event) => {
    let elemendID = "";

    const offsetBio = document.getElementById("bio").offsetTop;
    const offsetExpertise = document.getElementById("expertise").offsetTop;
    const offsetSkills = document.getElementById("skills").offsetTop;
    const offsetTopGetInTouch =
      document.getElementById("get-in-touch").offsetTop;

    const position = event.target.documentElement.scrollTop;

    if (position >= offsetBio - 1) {
      elemendID = "bio";
    }

    if (position >= offsetExpertise - 1) {
      elemendID = "expertise";
    }

    if (position >= offsetSkills - 1) {
      elemendID = "skills";
    }

    if (position >= offsetTopGetInTouch - 1) {
      elemendID = "get-in-touch";
    }
    // console.log(offsetSkills);
    // console.log(position);
    setScrolledToElement(elemendID);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScrollHandler);
    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  });
  return (
    <>
      <Burger toggleOpen={toggleOpen} isOpen={isOpen} />
      <nav className={isOpen ? "menu" : "menu closed"}>
        <div className="list-menu">
          <Link
            className={
              scrolledToElement === "bio"
                ? "nav-link underline-link selected"
                : "nav-link underline-link"
            }
            href="#bio"
            name="BIOGRAPHY"
          />
          <Link
            className={
              scrolledToElement === "expertise"
                ? "underline-link selected"
                : "underline-link"
            }
            href="#expertise"
            name="EXPERTISE"
          />
          <Link
            className={
              scrolledToElement === "skills"
                ? "underline-link selected"
                : "underline-link"
            }
            href="#skills"
            name="SKILLS"
          />
          <Link
            className={
              scrolledToElement === "get-in-touch"
                ? "underline-link selected"
                : "underline-link"
            }
            href="#get-in-touch"
            name="GET IN TOUCH"
          />
          {/* <Link className="underline-link" href="#" name="PROJECTS" /> */}
        </div>
        <Link href="#" name="Download my resume" className="download-resume" />
      </nav>
    </>
  );
}

export default Nav;
