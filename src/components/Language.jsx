import "../styles/Language.css";

function Language(props) {
  const { language, stars, maxStars } = props;

  const starsList = Array.from({ length: maxStars }, (v, i) =>
    i < stars ? (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
      >
        <polygon
          points="5,0 6.5,3.5 10,3.5 6.75,6.75 8.5,10 5,7.5 1.5,10 3.25,6.75 0,3.5 3.5,3.5"
          fill="#ff9f00"
        />
      </svg>
    ) : (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 10 10"
      >
        <polygon
          points="5,0 6.5,3.5 10,3.5 6.75,6.75 8.5,10 5,7.5 1.5,10 3.25,6.75 0,3.5 3.5,3.5"
          stroke="#0a1a2b"
          fill="none"
        />
      </svg>
    )
  );

  console.log(starsList);
  return (
    <li className='language-dot'>
      <div>{language}</div>

      <div>{starsList.map((el) => el)}</div>
    </li>
  );
}

export default Language;
