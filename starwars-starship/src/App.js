import "./App.css";
import Starships from "./Components/Starship";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Starship from "./Components/Starship";
// export const UserContext =React.createContext()

// <UserContext.Provider Value ={{,}}>

// </UserContext.Provider>

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="cards" element={<Starships />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
