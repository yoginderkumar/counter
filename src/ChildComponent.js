import React from "react";

function ChildComponent({ counter }) {
  console.log("Props: ", counter);
  return <div> {counter}</div>;
}

export default ChildComponent;
