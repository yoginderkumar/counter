import React from "react";

class ChildComponent extends React.Component{
   state={
         basicSalary:0
   }
      getValue(e){
               console.log(e.target.value)
               this.setState({basicSalary:Number(e.target.value)})
      }

   render(){
      return(<div>
            <h2 style={{display:"inline-block"}}>ID :</h2> <input /><br/>
            <h2 style={{display:"inline-block"}}>BS :</h2> <input /><br/>
            <h2 style={{display:"inline-block"}}>Leave :</h2> <input />
            <h2>HRA</h2>
            <h2>DDA</h2>
            <h2>CCA</h2>
            <h2>LvAMT</h2>
            <h2>PF</h2>
            <h2>GS</h2>
            <h2>NS</h2>

            

            


      </div>)
   }
}

export default ChildComponent;
