import "./App.css";
import Starships from "./Components/Starship";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export const UserContext =React.createContext()

// <UserContext.Provider Value ={{,}}>

// </UserContext.Provider>


function App() {
  return (
    // <Router>
      <div className="App">
        {/* <Routes> */}
          {/* <Route path="home" element={<Starships />}> */}
        <Starships />
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
