import React, { useState, useEffect } from "react";
import axios from "axios";

const Starship = () => {
  const [starShipOne, setStarShipOne] = useState([]);
  const [starShipTwo, setStarShipTwo] = useState([]);
  const [starShipThree, setStarShipThree] = useState([]);
  const [starShipFour, setStarShipFour] = useState([]);

  const fetchData = () => {
    const one = "https://swapi.dev/api/starships/?page=1&format=json";
    const two = "https://swapi.dev/api/starships/?page=2&format=json";
    const three = "https://swapi.dev/api/starships/?page=3&format=json";
    const four = "https://swapi.dev/api/starships/?page=4&format=json";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);

    axios.all([requestOne, requestTwo, requestThree, requestFour]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0].data.results;
        const responseTwo = responses[1].data.results;
        const responesThree = responses[2].data.results;
        const responseFour = responses[3].data.results;

        setStarShipOne(responseOne);
        setStarShipTwo(responseTwo);
        setStarShipThree(responesThree);
        setStarShipFour(responseFour);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Cards">
      {starShipOne.map((starship, index) => (
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

      {starShipTwo.map((starship, index) => (
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

      {starShipThree.map((starship, index) => (
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

      {starShipFour.map((starship, index) => (
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
  );
};
export default Starship;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Starship() {
//   const [starships, setStarships] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://swapi.dev/api/starships/?page=2&format=json")
//       .then((res) => {
//         // console.log(res.data.results);
//         setStarships(res.data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="Cards">
//       {starships.map((starship, index) => (
//         <p key={index}>
//           Ship Name: {starship.name} <br />
//           Model: {starship.model}
//           <br />
//           Manufacturer: {starship.manufacturer}
//           <br />
//           Class: {starship.starship_class}
//           <br />
// Crew: {starship.crew}
// <br />
// Cargo: {starship.cargo_capacity} tons <br />
// Cost: {starship.cost_in_credits} credits
//         </p>
//       ))}
//     </div>
//   );
// }

// export default Starship;
