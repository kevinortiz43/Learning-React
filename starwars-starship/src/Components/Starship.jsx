import React, { useState, useEffect } from "react";
import axios from "axios";

function Starship() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/?format=json")
      .then((res) => {
        console.log(res);
        setStarships(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <ul>
        {starships.map((starship) => (<li key={starship.name}>{starship.name}</li>))}
      </ul>
    </div>
  );
}

export default Starship;
