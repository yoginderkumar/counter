import React from "react";

function ChildComponent({ counter }) {
  console.log("Props: ", counter);
  return <div>
     <input type="text" style={{textAlign:"center"}} 
     value={counter} onChange={(e)=>{console.log(e.target.value)}}/>
     </div>;
}

export default ChildComponent;
