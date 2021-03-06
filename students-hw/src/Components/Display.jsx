import Score from "./Score";

export default function Display(props) {
    console.log(props)
  return (
    <div className="students">
      <p>Name: {props.student.name}</p>
      <p>Biography: {props.student.bio}</p>
      {props.student.scores.map((studentScore, index) => {return <Score studentScore={studentScore} key={index} />;})}
    </div>
  );
}
