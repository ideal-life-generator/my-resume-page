import WorkPlace from "./WorkPlace";
import "../styles/ExpertiseBlock.css";

function ExpertiseBlock(props) {
  const { workList, title} = props;
  //console.log(props);
  return (
    <>
      <div className='title'>{title}</div>
      {workList.map((el) => (
        <WorkPlace
          key={el.time}
          {...el} />
      ))}

    </>
  );
}

export default ExpertiseBlock;
