import React from "react";
import Card from './Card.jsx';

export default function Cards({cities,onClose}){
  
    if(cities){
        return (
          <div > 
            {cities.map(c =>  <Card
                max={c.max}
                min={c.min}
                name={c.name}
                img={c.img}
                key={c.id}
                onClose={()=>onClose(c.id)}
                
              />
            )}
          </div>
        )
      } else {
        return(
          <div>Sin ciudades</div>
        )
      }
    }
 