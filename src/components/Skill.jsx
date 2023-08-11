

function Skill(props) {
    const {number, text}= props;

    return (
        <>
            <div>{number}%</div>
            <div>{text}</div>
        </>
    )

}

export default Skill;