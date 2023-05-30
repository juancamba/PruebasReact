import React from "react";
import ReactDOM from "react-dom/client";
import { Gretings, UserCard } from "./Greetings";
import Product, { Navbar } from "./Product";
import {Button} from "./Button"
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import {Posts} from "./Posts";
import { useState } from "react";
import { useEffect } from "react";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// https://www.youtube.com/watch?v=rLoWMU4L_qE
// 1.48

const handleChange = (e)=>{
  console.log(e.target.value)
  console.log(e.target.id)}

function Counter(){

  const [mensaje,setMensaje] = useState('')

  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    console.log('useEffect executed')
  }, [counter])

  return( <div>
     <input type="text" onChange={e=>setMensaje(e.target.value)} />
    
    <button onClick={()=>{
      alert("el mensaje es: "+mensaje)

    }} >Save</button>

    <hr></hr>
    <h1>Counter: {counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>Increment</button>
  </div>
  )
}

root.render(
<>
<Counter/>
</>
  );


