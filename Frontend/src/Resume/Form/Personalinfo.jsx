import React from "react";

export default function Personalinfo({setInput}){
  return (
    <div>
      <h2>Personalinfo</h2>
      <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
    </div>
  );
}
