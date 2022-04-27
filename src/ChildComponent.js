import React from "react";

function ChildComponent({ counter }) {
  console.log("Props: ", counter);
  function getValue(e){
     console.log(e.target.value)
  }

  
  return <div>
  
     </div>;
}

export default ChildComponent;
