import React from "react";

export default class Render extends React.Component {
  render() {
    return (
      <div>
        <h1> Item: {this.props.grocery.item} </h1>
        <h1> Units: {this.props.grocery.units}</h1>
        <h1> Quantity: {this.props.grocery.quantity} </h1>
        {/* from grocery passed down as this . props. grocery . item */}
      </div>
    );
  }
}
