import React from "react";

function SelectCategory(props) {
  const handleOnChange = (event) => {
    props.categorySet(event.target.value);
  };

  return (
    <div>
      <select onClick={handleOnChange}>
        <option value={"Reviews"}>Reviews</option>
        <option value={"Title"}>Title</option>
        <option value={"Deal Rating"}> Deal Rating</option>
        <option value={"Price"}>Price</option>
        <option value={"Metacritic"}>Metacritic</option>
        <option value={"Release"}>Release</option>
        <option value={"Store"}>Store</option>
        <option value={"recent"}>recent</option>
      </select>
    </div>
  );
}

export default SelectCategory;
