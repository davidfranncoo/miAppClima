import React from "react";
import './Card.css'

export default function Card({min,name,max, img}){
    return(
        <div className="letra">
            <button onClick={()=>{}}>X</button>
            <div>
                <h1 className="letra">{name}</h1>
            </div>

            <div>
                <h2>minimo</h2>
                <h1>{min}º</h1>
            </div>

            <div>
                <h1>max</h1>
                <h2>{max}º</h2>

            </div>
            <div> 
                    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='logo del clima'/>
            </div>
                
        </div>
    )

};