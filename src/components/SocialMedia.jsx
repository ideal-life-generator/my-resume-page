import "../styles/SocialMedia.css";

function SocialMedia(props) {
  const { facebook, codewars } = props;

  return (
    <>
      <h3 className="where-to-find">WHERE TO FIND ME</h3>
      <div className="social-media">
        <div className="socials-disk-container">
          <div className="disk-social-media"></div>
          <a href={facebook} target="_blank">
            Facebook
          </a>
        </div>
        <div className="socials-disk-container">
          <div className="disk-social-media"></div>
          <a href={codewars} target="_blank">
            Codewars
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
