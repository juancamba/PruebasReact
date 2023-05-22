import React from "react";
import ReactDOM from "react-dom/client";
import { Gretings, UserCard } from "./Greetings";
import Product, { Navbar } from "./Product";
import {Button} from "./Button"
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import {Posts} from "./Posts";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// https://www.youtube.com/watch?v=rLoWMU4L_qE
// 1.48

const handleChange = (e)=>{
  console.log(e.target.value)
  console.log(e.target.id)}
root.render(
  <div>
    <TaskCard ready={false}></TaskCard>
<Saludar></Saludar>
<Posts></Posts>



 {/*    <Button text="click me"/>
    <Button text="pay"/>
    <Button text="Go to"/> */}

    {/* <Gretings title="Hola mundo" name="juan" />
    <Gretings title="Hola java" name="juan" />
    <Gretings title="Hola jsx" name="juan" />
    <UserCard
      name="Ryan Ry"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 calle falsa", city: "New York" }}
    />
    <Product />
    <Navbar /> */}

  </div>
);
