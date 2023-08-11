

function Language(props) {
    const { language, stars, maxStars } = props;

    const starsList = Array.from({ length: maxStars }, (v, i) => (i < stars) ? 1 : 0);

    console.log(starsList);
    return (
      <>
        <div>{language}</div>
        {/* <div>{stars} / {maxStars}</div> */}
            <div>{starsList.map((el, i) => (
                <span key={`${el}_${i}`}>{ el }</span>
        ))}</div>
      </>
    );


}

export default Language;