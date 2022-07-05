import React, {useState} from "react";
import Cards from "./component/Cards.jsx";
import Nav from './component/Nav.jsx'

import './App.css'

//Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
//pero de momento agregaremos una ciudad por default para ver que funcione


export default function App() { 
  const apiKey='4ae2636d8dfbdc3044bede63951a019b'
  function onClose(id){ 
    setCiudades(ciudades=>ciudades.filter(c=>c.id!=id))

}

  const [ciudades,setCiudades]=  useState([])
 
  function onSearch(ciudad) {
    
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCiudades(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
  
      }
  

   
   
  
  return <div className="todos">

        <Nav busqueda={onSearch}/>
        <Cards cities={ciudades} onClose={onClose} />
 
      </div>


}



//import Card from './component/Card.jsx'
//import Hook from "./component/Hook.jsx";



{/* <h1>
     <Card
      max={Cairns.main.temp_max}// las props
      min={Cairns.main.temp_min}
      name={Cairns.name}
      img={Cairns.weather[0].icon}
      onClose={() => alert(Cairns.name)}
      />
 </h1> */}
 {/* <h4>
 <Hook/>
 </h4> */}