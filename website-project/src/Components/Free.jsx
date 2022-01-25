import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Free() {
  const [free, setFree] =useState([])
  let setUpFree = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": "67ab11fd54msh4efb98e8f929171p12a5c7jsn3604bc8c7753",
    },
  };
  // I want to make a drop down menu for each different query
  // select options
  // onChange attach to select and get the value, event target value,

  // params: { category: "shooter" },
  /*  
    QUERIES for GENRES
    category: ''
  mmorpg, shooter, strategy, moba, racing, sports, 
  social, sandbox, open-world, survival, pvp, pve,
  pixel, voxel, zombie, turn-based, first-person, third-Person,
  top-down, tank, space, sailing, side-scroller, superhero, permadeath, 
  card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, 
  sci-fi, fighting, action-rpg, action, military, martial-arts, flight, 
  low-spec, tower-defense, horror, mmorts
  */
  /*
 SPECIFIC PLATFORMS FOR GAMING
params: {platform: 'pc'},
params: {platform:'xbox'}
params:{platform: 'ps4'}
params:{platform: 'browser'}
params:{platform: 'all'}
 */
  /*
MULTIPLE CATEGORIES AND SORTED
params:{platform:"", category:"", 'sort-by':'' },
*/
  /*
SORT GAMES 
 params: { "sort-by": "alphabetical" },
 params: { "sort-by": "release-date" },
 params: { "sort-by": "popularity" },
 params: { "sort-by": "relevance" }, 
 */
  /*
 FILTERING GAMES BY MULTIPLE TAGS
 GET https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc
 */
  /*
BASIC GAME LIST
https://free-to-play-games-database.p.rapidapi.com/api/games
*/

  useEffect(() => {
    axios
      .request(setUpFree)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      }, []);
      });

  return <div></div>;
}
