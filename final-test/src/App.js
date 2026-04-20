import React from "react"
import ProfieCard from "./ProfileCard"
function App(){

  var company = "Amazon";
  
  return(
    <div>
        <h1>Profile Card for {company}</h1>
        <ProfieCard />
        <ProfieCard />
        <ProfieCard /> 
        <ProfieCard />
    </div>
  );
}
export default App
