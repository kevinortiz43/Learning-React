import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      units: "",
      quantity: "",
      isPurchased: false,
    };
  }

  handleChange = (event) => {
   
        if (event.target.id === 'item') {
            this.setState({ item: event.target.value })

        } else if (event.target.id === 'units') {
            this.setState({ units: event.target.value })

        } else {
            this.setState({ quantity: event.target.value })
        }
   

    // Computed property name

    // this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    ///    onClick ... onChange ... onSubmit
    event.preventDefault();
    this.props.oneGrocery(this.state)
    // this. = because we are in a class
    // props. because its being passed down from a different componenet 
    // oneGrocery because we established it as a variable equal to our function 
    // props (properties) = object 
    // trying to use a function 
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="cf">
       
        <label htmlFor="item">item:</label>
        <input
          id="item"
          onChange={this.handleChange}
          value={this.state.item}
          />

        <label htmlFor="units">units:</label>
        <input
          id="units"
          onChange={this.handleChange}
          value={this.state.units}
          
          />

        <label htmlFor="quantity">quantity:</label>
        <input
          id="quantity"
          onChange={this.handleChange}
          value={this.state.quantity}
        />

        <button>Submit</button>
      </form>
    );
  }
}

