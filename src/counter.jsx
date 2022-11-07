import React from "react";


const Clickcounter = (props) => {

  

  return(
    <div>
      <button onClick={props.handleclick}>Clicked {props.count} times </button>
    </div>
  )
};

export default Clickcounter;