import React from "react";


const Clickhover = (props) => {

  

  return(
    <div>
      <h3 onMouseOver={props.handleclick}>Hovered {props.count} times </h3>
    </div>
  )
};

export default Clickhover;