import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Starship() {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(" ");
  const [prevPage, setPrevPage] = useState(" ");

  function fetchData2(url) {
    axios
      .get(url)
      .then((res) => {
        setStarships(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData2("https://swapi.dev/api/starships/?page=1&format=json");
  }, []);

  return (
    <div>
      <button className="button" onClick={() => fetchData2(nextPage)}>
        Get Next Page
      </button>
      <button className="button" onClick={() => fetchData2(prevPage)}>
        Get Previous Page
      </button>

      <div className="Cards">
        {starships.map((starship, index) => (
          <p key={index}>
            Ship Name: {starship.name} <br />
            Model: {starship.model}
            <br />
            Manufacturer: {starship.manufacturer}
            <br />
            Class: {starship.starship_class}
            <br />
            Crew: {starship.crew}
            <br />
            Cargo: {starship.cargo_capacity} tons <br />
            Cost: {starship.cost_in_credits} credits
          </p>
        ))}
      </div>
    </div>
  );
}
