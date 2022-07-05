import React,{ useState} from "react";

//'preventDefault'=>es para evitar comportamiento que trae por default REACT, en 
//este caso un cargado automatico en la pag

export default function SearchBar({onSearch}) {

    const[input,setInput]=useState('')

    function seEnvioLaInfo(e){
      e.preventDefault();
      onSearch(input)
      setInput('')
    }
    
    const onInputChange =(e)=>{
          setInput(e.target.value)
    }

    return (


      <form onSubmit={(e) => { seEnvioLaInfo(e)}}>
 <input
        value={input}
        onChange={(e)=> onInputChange(e)}
          type="text"
          placeholder="Ciudad..."
        />
        <input type="submit" value="Agregar" />
      </form>
    );
  }