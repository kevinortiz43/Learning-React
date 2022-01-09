import Sink from "./Sink";
import Oven from "./Oven";

function Kitchen(props) {
  return (
    <div className="Kitchen">
      <h1>Kitchen</h1>
      <Sink />
      <Oven />

    </div>
  );
}

export default Kitchen;
