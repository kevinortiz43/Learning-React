import "./App.css";
import Jeopardy from "./Components/Jeopardy";
import Points from "./Components/Points";
function App() {
  return (
    <div className="App">
      <h1 className="Jeopardy"> Jeopardy</h1>
      <Points /> <br />
      <Jeopardy />
    </div>
  );
}

export default App;
