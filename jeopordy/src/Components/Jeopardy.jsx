import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Jeopardy() {
  const [gameShow, setGameShow] = useState([]);
  const [hideQuestion, setQuestion] = useState(false);

  // variable that changes whether its true or false, on click
  // when button is click it turns to true
  // use ternary statement to see if components its shown or not
  // this is what shows and hides

  useEffect(() => {
    // when render first time, when finish rendering, it gets triggered, run this piece of code
    axios
      .get(" http://jservice.io/api/random")
      .then((res) => {
        console.log(res.data);
        setGameShow(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  function gameShow2() {
    console.log("Hello");
    axios
      .get("http://jservice.io/api/random")
      .then((res) => {
        console.log(res.data);
        setGameShow(res.data);
      })

      .catch((error) => {
        console.log(error);
      });
        setQuestion(false)
    } 

  return (
    <div className="GameShow-Container">
      {gameShow.map((gameShow, index) => (
        <div key={index}>
          <button className="Get-Question-Button" onClick={() => gameShow2()}> Get next question</button>
          <p className="Question">Question: {gameShow.question}</p>
          <p className="Category">Category {gameShow.category.title}</p>
          <p className="Value">Value of this Question: {gameShow.value}</p>
          <button className="Get-Answer-Button" onClick={() => setQuestion(!hideQuestion)}>
            Click me to get the answer
          </button>
          {hideQuestion ? <p className="Answer">Answer: {gameShow.answer}</p> : null} <br />
        </div>
      ))}
      
    </div>
  );
}
