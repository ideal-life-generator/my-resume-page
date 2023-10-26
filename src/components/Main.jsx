import ExpertiseBlock from "./ExpertiseBlock";
import Skill from "./Skill";
import Language from "./Language";
import GetInTouch from "./GetInTouch";
import ContactMe from "./ContactMe";
import SocialMedia from "./SocialMedia";
import Name from "./Name";
import "../styles/Main.css";
import mainPhoto from "../img/DM4A0673-Edit.png";
import stairsPhoto from "../img/olga-stairs-cropped.jpg";

function Main() {
  const expertise = [
    {
      title: "Experience",
      workList: [
        {
          time: "Jan 2019 Current",
          place: "The RMR Group Inc., Helsinki, Finland",
          position: "RECRUITING MANAGER",
          list: [
            "Oversaw all hiring processes and procedures from start-to-finish interviewing, recruiting, and onboarding of all new staff.",
            "Maintained professional relationships with employment agencies.",
            "Created seminars and presentations; participated in weekly meetings with executives.",
          ],
        },
        {
          time: "Aug 2012 April 2016",
          place: "GEA Group AG, Düsseldorf, Germany",
          position: "HR CONSULTANT/ ADVISOR",
          list: [
            "Supported Recruiting Manager with any required tasks.",
            "Collaborated with senior managers in order to fully understand company processes and procedures.",
          ],
        },
      ],
    },
    {
      title: "Education",
      workList: [
        {
          time: "Sep 2005 May 2009",
          place: 'International University of Human Development "Ukraine"',
          position: "PHILOLOGY",
          list: [
            "Oversaw all hiring processes and procedures from start-to-finish interviewing, recruiting, and onboarding of all new staff.",
          ],
        },
      ],
    },
  ];

  const skills = [
    {
      number: 97,
      text: "HTML",
    },
    {
      number: 87,
      text: "CSS",
    },
    {
      number: 97,
      text: "JavaScript",
    },
    {
      number: 90,
      text: "React",
    },
    {
      number: 97,
      text: "Node.js",
    },
    {
      number: 97,
      text: "Handlebars",
    },
  ];

  const languageList = [
    {
      language: "English",
      stars: 4,
      maxStars: 5,
    },
    {
      language: "Ukrainian",
      stars: 3,
      maxStars: 5,
    },
    {
      language: "russian",
      stars: 2,
      maxStars: 5,
    },
  ];

  return (
    <main>
      <Name />
      <div className="my-first-photo-container">
        <img src={mainPhoto} className="my-first-photo" />
      </div>

      <div className="main-container">
        <div className="big-title" id="bio">
          Self-driven and proactive Recruiting Manager with a passion for
          creative problem-solving methods.
        </div>
        <div className="main-block">
          <div className="general_experience" id="expertise">
            Experienced Recruiting Specialist with years of experience in hiring
            process management and recruitment procedure monitoring, developer
            of cross-company work force allocation strategies, a true team
            leader & most importantly, a good friend. Currently working at the
            Softworks Verity Technologies LTD as a senior Human Resources
            Manager and Digital Business Automation Specialist, with more than
            twenty teams in her official jurisdiction.
            <img className="cat" src={stairsPhoto} />
          </div>
          {expertise.map((el) => (
            <ExpertiseBlock key={el.title} {...el} />
          ))}
        </div>

        <div className="big-title" id="skills">
          Something great about myself is supposed to be here
        </div>
        <div className="main-block-container">
          <div className="main-block">
            <div className="general_experience" id="expertise">
              Experienced Recruiting Specialist with years of experience in
              hiring process management and recruitment procedure monitoring,
              developer of cross-company work force allocation strategies, a
              true team leader & most importantly, a good friend. Currently
              working at the Softworks Verity Technologies LTD as a senior Human
              Resources Manager and Digital Business Automation Specialist, with
              more than twenty teams in her official jurisdiction.
            </div>
          </div>
          <div className="side-block">
            <div className="side-block-title">Languages I speak</div>
            <div className="languages">
              <ul>
                {languageList.map((el) => (
                  <Language key={el.language} {...el} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="skill-container">
          {skills.map((el) => (
            <Skill key={el.text} {...el} />
          ))}
        </div>

        <div className="main-block main-block-text">
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum
        </div>

        <h2 id="get-in-touch">Get in touch</h2>

        <div className="main-block-container">
          <div className="main-block">
            <GetInTouch
              name="Name"
              email="Email"
              phone="Phone"
              message="Your message..."
            />
          </div>

          <div className="side-block">
            <ContactMe
              name="Olga Geyfman-Orlova"
              email="olgaorlova241@gmail.com"
              phone="+12345566"
              address="5604 Bentwood Trail, Dallas"
              mapLink="https://goo.gl/maps/J9b9H7GxpzwkmWMUA"
            />

            <SocialMedia
              facebook="https://www.facebook.com"
              codewars="https://www.codewars.com/users/888yalosinger"
            />
          </div>
        </div>
        <footer className="footer">
          © 2021 Qode Interactive, All Rights Reserved
        </footer>
      </div>
    </main>
  );
}

export default Main;
