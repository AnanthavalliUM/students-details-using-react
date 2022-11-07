import React from "react";
import "./style.css";
import Clickcounter from "./counter"
import Clickhover from "./hover"
import Highcomponent from "./highcomp"
import Studentdetails from "./student"

const Updatedclickcomp = Highcomponent(Clickcounter);
const Updatedhovercomp = Highcomponent(Clickhover);


export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Updatedclickcomp />
      <Updatedhovercomp />
      <Studentdetails />
    </div>
  );
}
