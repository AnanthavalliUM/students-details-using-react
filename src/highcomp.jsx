import React, {useState} from "react";

// a pattern where a function takes a component as  an argument and returns a new component is known as hoc component
const Highcomponent = Updatedcomponent => {
  function Newcomponent(props) {
    const [count, setcount] = useState(0);

    const handleclick = () => {
      setcount(count + 1);
    }

    return(
      <Updatedcomponent count={count} handleclick={handleclick} 
      {...props} />
    )
  }
  return Newcomponent
}

export default Highcomponent;
