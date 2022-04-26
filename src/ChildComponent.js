import React from "react";

function ChildComponent({ counter }) {
  console.log("Props: ", counter);
  return <div>State From a child componentskjbdkjbdb: {counter}</div>;
}

export default ChildComponent;
