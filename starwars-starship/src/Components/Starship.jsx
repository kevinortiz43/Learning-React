import React, { useState, useEffect } from "react";
import axios from "axios";

function Starship() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/?page=2&format=json")
      .then((res) => {
        // console.log(res.data.results);
        setStarships(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Cards">
       
      {starships.map((starship, index) => (
        <p key={index}> 
        Ship Name: {starship.name} <br/>
        Model: {starship.model}<br/>
        Manufacturer: {starship.manufacturer}<br/>
        Class: {starship.starship_class}<br/>
        Crew: {starship.crew}<br/>
        Cargo: {starship.cargo_capacity} tons <br/>
        Cost:  {starship.cost_in_credits} credits


         </p>
        ))}
       
    </div>
  );
}

export default Starship;
