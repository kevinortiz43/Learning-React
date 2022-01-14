import React from "react";

export default class Render extends React.Component {
  render() {
    return (
      <div className="List">
        <h3> <center> Item: {this.props.grocery.item} </center> </h3>
        <h3> <center> Units: {this.props.grocery.units} </center></h3>
        <h3> <center> Quantity: {this.props.grocery.quantity} </center> </h3>
        {/* from grocery passed down as this . props. grocery . item */}
      </div>
    );
  }
}
