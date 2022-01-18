import React from "react";

function Note() {
  return (
    <div className="note">
      <h1> Note </h1>
      <p contentEditable="true" placeholder=" Enter your note here. " > </p>
    </div>
  );
}

export default Note;
