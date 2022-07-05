import React from "react";
import Logo from '../FSD.webp'
import SeachBar from "./SeachBar.jsx";
import './Nav.css'


export default function Nav({busqueda}){

    return (
        <div className="nav">

            <h1>soy nav</h1>

            <img src={Logo} placeholder="logo de franco"></img>

            <SeachBar
           onSearch={busqueda}/>


        </div>
    
    )

} 