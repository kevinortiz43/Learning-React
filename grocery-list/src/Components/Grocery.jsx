import React from "react";
import Input from "./Input";
import Render from "./Render";

class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          item: "beer",
          units: "12 oz",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "soda",
          units: "12oz",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "water",
          units: "1 gallon",
          quantity: 1,
          isPurchased: false,
        },
      ],
    };
  }
   
  addGroceries = (oneGrocery) =>{
    // console.log(oneGrocery);
    this.setState({groceries:[...this.state.groceries,oneGrocery]}, console.log(oneGrocery))
    // always put an arrow function 
    // let arr= this.state.groceries.slice()
    // arr.push(oneGrocery)
    // this.setState({groceries:arr},()=>console.log(this.state))
  };

  render() {
    return (
      <div>
        <Input  oneGrocery = {this.addGroceries}   />
        
        {this.state.groceries.map((grocery, index)=> {return <Render grocery = {grocery} key={index}/> })}

        {/* pass down the function by invoking */}
      </div>
    );
  }
}

export default Grocery;
