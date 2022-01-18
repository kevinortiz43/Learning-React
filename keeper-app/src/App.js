import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <Note className="note" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
