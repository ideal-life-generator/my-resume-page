

function SocialMedia(props) {
    const { facebook, codewars } = props;

    return (
      <>
        <h3>WHERE TO FIND</h3>
            <a href={facebook} target="_blank">Facebook</a>
            <a href={codewars} target="_blank">Codewars</a>
      </>
    );

}

export default SocialMedia;