import React from "react";
import Card from './component/Card.jsx'
import Cards from "./component/Cards.jsx";
import SeachBar from "./component/SeachBar.jsx";
import data, {Cairns} from './Data.js'
import './App.css'



function App() { 
  return <div className="todos">
    {/* <h3>
      <SeachBar />
    </h3>
   
    
    <h1>
      <Card
             max={Cairns.main.temp_max}// las props
             min={Cairns.main.temp_min}
             name={Cairns.name}
             img={Cairns.weather[0].icon}
             onClose={() => alert(Cairns.name)}
             />
    </h1>

    <h2>
      <Cards
            city={data}
            />
    </h2>
 */}

  </div>

 
}

export default App;
