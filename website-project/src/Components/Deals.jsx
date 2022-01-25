import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectCategory from "./SelectCategory";
import DealsStore from "./DealsStore";

export default function Deals() {
  const [deals, setDeals] = useState([]);
  const [sortCategory, setSortCategory] = useState("Reviews");
  const [count, setCount] = useState(1);
  const [searchBar, setSearcBar] = useState("");
  const [pageSize, setPageSize] =useState("60")
  const [sortDirection, setSortDirection] =useState(0)

  function apiCall() {
    axios
      .request(setUpDeals)
      .then(function (response) {
        console.log("apiCall");
        let tempArray = [];
        response.data.forEach((dataElement) => {
          if (
            tempArray.find((element) => element.title === dataElement.title)
          ) {
            tempArray[
              tempArray.findIndex(
                (individual) => individual.title === dataElement.title
              )
            ].sales.push({
              salePrice: dataElement.salePrice,
              savings: dataElement.savings,
              storeID: dataElement.storeID,
            });
          } else
            tempArray.push({
              title: dataElement.title,
              thumb: dataElement.thumb,
              normalPrice: dataElement.normalPrice,
              steam: dataElement.steam,
              steamRatingPercent: dataElement.steamRatingPercent,
              steamRatingText: dataElement.steamRatingText,
              sales: [
                {
                  salePrice: dataElement.salePrice,
                  savings: dataElement.savings,
                  storeID: dataElement.storeID,
                },
              ],
            });
        });

        // console.log(tempArray);
        setDeals(tempArray);
        // setDeals(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const nextPage = () => {
    setCount((count) => {
      if (count >= 50) return count;
      return count + 1;
    });
    console.log("nextPage");
    // apiCall();
  };

  const previousPage = () => {
    setCount((count) => {
      if (count <= 1) return count;
      return count - 1;
    });
    // apiCall();
  };

  const setUpDeals = {
    method: "get",
    url: `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortCategory}&onSale=1&pageNumber=${count-1}&title=${searchBar}&pageSize=15&${sortDirection}`,
    // https://www.cheapshark.com/api/1.0/deals?sortBy=${sortCategory}&onSale=1&pageNumber=${count-1}&title=${searchBar}&pageSize=60
    headers: {},
  };

  // useEffect(() => {
  //   apiCall();
  // }, []);

  function categorySet(category) {
    setSortCategory(category);
    // apiCall();
  }

  useEffect(() => {
    apiCall();
  }, [sortCategory, count]);

  return (
    <div>
      <br />


      <SelectCategory categorySet={categorySet} />
      <button className="Next-Page" onClick={nextPage}>Next Page</button>
      <button className="Previous-Page" onClick={previousPage}>Previous Page</button>
      <p className="Page">Page: {count}</p>
      <input type="text" placeholder="search" name="search"></input>
      <div className="Deals-Container">
        {deals.map((deals, index) => (
          <div className="Deals" key={index}>
            <h2> Title:</h2>
            <p> {deals.title}</p>
            <img alt="Video Game Thumbnails" src={deals.thumb} width="100px" />
            <br />
            Steam Rating:
            <p className="Rating-Percentage">{deals.steamRatingPercent}%</p>
            <p> {deals.steamRatingText}</p>
            <p>Normal Price: ${deals.normalPrice}</p>
            {deals.sales.map((deals, index) => {
              return <DealsStore deals={deals} key={index} />;
            })}
          </div>
            ))}
      </div>
      <SelectCategory categorySet={categorySet} />
      <button className="Next-Page" onClick={nextPage}>
        Next Page
      </button>
      <button className="Previous-Page" onClick={previousPage}>
        {" "}
        Previous Page
      </button>
      <p>Page: {count}</p>
    </div>
  );
}


    //  <Stack sx={{ width: 300, margin: "auto" }}>
    //     <Autocomplete
    //       id="Video-Game-Titles"
    //       getOptionLabel={(deals) => `${deals.title}`}
    //       options={deals}
    //       sx={{ width: 300 }}
    //       isOptionEqualToValue={(option, value) => option.title === value.title}
          
    //       // noOptionText={"No game matches your search"}
    //       renderOption={(props,deals)=>(
    //         <Box component="li" {...props} key={deals.title}>
    //           {deals.title}
    //         </Box>
    //       )}
    //       renderInput={(params)=> <TextField {...params} label=" search for a game" />}
    //     />
    //   </Stack> 