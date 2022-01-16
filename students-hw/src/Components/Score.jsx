export default function Score(props) {
  return (
    <div>
      <p>Score: {props.studentScore.score}</p>
      <p>Date: {props.studentScore.date} </p>
    </div>
  );
}
