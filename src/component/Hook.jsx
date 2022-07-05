import React,{useState} from "react";
import './Hook.css'
//Alerta utilizando Hooks, para ello vemos que se tomo el valor ingresado por input
//tener en cuenta que se usa:state,setState y useState, los dos primeros pueden variar



export default function Hook(){

    const [state,setState]= useState('')// asi se hace el llamdo con hooks

    function onChhange(event){
        //'event' es palabra reservada
        console.log(event.target.value)
        setState(event.target.value)

    }


    return(
        <div className="Hook">   



        <h1>Alerta utilizando Hooks, para ello vemos que se tomo el valor ingresado por input </h1>     
            <input className="Hook" onChange={(evento)=>onChhange(evento)} type='text' placeholder='escribe texto'></input>
            <button className="Hook" onClick={()=> alert(`el nombre es : ${state}`)}> agregar</button>
        </div>
        )


}