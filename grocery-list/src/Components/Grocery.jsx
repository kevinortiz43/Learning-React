import React from "react";
import Input from "./Input";
import Render from "./Render";
class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          
           item: "Beer",
           units: "12oz",
           quantity: 1,
           isPurchased: false,
        },
        {
           item: "Soda",
           units: "12oz",
           quantity: 1,
           isPurchased: false,
        },
        {
           item: "Water",
           units: "1 gallon",
           quantity: 1,
           isPurchased: false,
        },
      ],
    };
  }
  // always put an arrow expression function
  // setState() tells React that this components and its children need to be re-rendered
  // with the updated state. This is the primary method you use to update the user interface in response
  // in response to event handlers and server responses.
  // Think of setState() as a request rather than an immediate command to update the component.
  
  // This is a more lengthy way of doing this.
  // let arr= this.state.groceries.slice()
  // arr.push(oneGrocery)
  // this.setState({groceries:arr},()=>console.log(this.state))
  
  addGroceries = (oneGrocery) => {
    this.setState({ groceries: [...this.state.groceries, oneGrocery] },console.log(oneGrocery));};

    // displayIsPurchase = () =>{
    //   this.setState({groceries: ? isPurchased : true})
    // }
    // <button>Display</button>
  render() {
    return (
      <div className="GroceryContainer">
        <h1> <center>Grocery List </center> </h1>
        
        <Input oneGrocery={this.addGroceries} />

        {this.state.groceries.map((grocery, index) => {return <Render grocery={grocery} key={index} />;})}

        {/* pass down the function by invoking */}
      </div>
    );
  }
}

export default Grocery;
