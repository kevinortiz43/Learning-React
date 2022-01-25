import React from "react";

function SelectDirection(props) {
  const handleOnChange = (event) => {
    props.directionSet(event.target.value);
  };

  return (
    <div>
      <select onClick={handleOnChange}>
        <option value={0}>High to low</option>
        <option value={1}>Low to High</option>
      </select>
    </div>
  );
}

export default SelectDirection;
