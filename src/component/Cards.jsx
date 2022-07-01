import React from "react";
import Card from "./Card";

export default function Cards({city}){

        return(
            <div>
                {city.map((e)=>
                <Card
                   max={e.main.temp_max}// las props
                   min={e.main.temp_min}
                   name={e.name}
                   img={e.weather[0].icon}
                   onClose={() => alert(e.name)}
                   key={e.id}
                />
                )}
            </div>
        )
    
            }
 