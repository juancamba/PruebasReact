# Getting Started with Create React App

basado en :

https://www.youtube.com/watch?v=rLoWMU4L_qE



f1, setting json agregamos "editor.wordWrap": "on" para que envuelv y no crear scroll

Esta basado en compoenente por ejmplo una web con navbar, sidebar y 4 post estan dentro del componente principal

root
    navbar
    sidebar
    post
        post 1
        post 2
        post 3

 Los componentes son funciones que retornan un hmlt

 Para llamar una funcion desde html lo hacemos con {}       

```
function Grettings()
{
    return <div>
        <h1>Hola</h1>
        <p>lorenzo 123</p>
    </div>
}

root.render(
<div>
  root.render(
<div>
    {Grettings()}
    // esta es la forma que recomienda REACT, mucho mas legible
    <Grettings></Grettings>

</div>

</div>



);
``` 

Los compoenentes son archivos js, que van en mayuscula. Se exportan con los ESModules

## Props ##
Son los atributos de html que se pasan a las funciones de javascript. Ojo se pasa clave valor

```
export function Gretings(props) {

  return <h1>Componente de react: {props.title}</h1>;
}

// desde el index
<Gretings title="Hola mundo"/>
    <Gretings title="Hola java"/>
    <Gretings title="Hola jsx"/>

```

```
export function Gretings(props) {

  return <h1>Componente de react: {props.title} : {props.name}</h1>;
}

// desde el index
 <Gretings title="Hola mundo" name="juan"/>
    <Gretings title="Hola java" name="juan"/>
    <Gretings title="Hola jsx" name="juan"/>

// con el array deconstruido
export function UserCard({name, amount,married,address}){
  return <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{amount}</p>
      <p>{married ? 'married':'single'}</p>
      <ul>
        <li>{address.street} {address.city}</li>
      </ul>
  </div>
  ;
}
// desde index
<UserCard
      name="Ryan Ry"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 calle falsa", city: "New York" }}
    />

```

## Estilos en linea ##
Son los estilos que se hacen al vuelo

```
export function TaskCard() {
    const cardStyles = { background: "#202020",color:'#fff', padding:'20px' };


  return (
    <div style={cardStyles}>
      <h1 style={{fontWeight: 'lighter'}}>Primer Tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
```

## EStilos CSS ##
Creamos un archivo css y punto. Nota que importamos el archivo y usamos className

```
import "./task.css";
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}>Primer Tarea</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
{/* en base al paremetro ready, cojo una clase css u otra*/}
      <span className={ready ? 'bg-green'  :'bg-red' }>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}


// archivo css
.card{
    background-color: #202020;
    color:aliceblue;
}

```
## Componentes en clases ##
Los componentes tambien se pueden crear en clases, pero se suele usar funciones, aunque las funciones, son mas sencillas

```
import { Component } from "react"

export class Saludar extends Component{
    render(){
        return <h1>Hola world</h1>
    }
}
```



## Event Handlers ##

todos los eventos empiezan por el prefijo "on": onclick, onChange, onSubmit

Creamos un input con un evento on change en el index.js
```
<input id="usuario" onChange={(e)=>{
  console.log(e.target.value)
  console.log(e.target.id)
}}/>
```
Otra foram podroa ser quitar esa función fuera
```
const handleChange = (e)=>{
  console.log(e.target.value)
  console.log(e.target.id)}

<input id="usuario" onChange={handleChange}/> 
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

paquete para especifica el tipo de datos en las variables

### formulario ###
Hay que quitar el comportamiento por defecto que es enviar, por si queremos hacer otra cosa con el formulario
```
<form onSubmit={(e)=>{
  e.preventDefault()
  console.log("Enviado")


}}>
  <h1>Registro usuario</h1>
  <button>Send</button>
```

## fetch post ##

```
export const Posts = ()=>{
    return <button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.comf/posts")
        .then(response=>(response.json()))
        .then(data=>console.log(data))
        .catch(e=>console.error(e))
    }}>
        Traer datos
    </button>

}
```
## Componentes de terceros ##
### react icons ###
Para usar iconos, instalamos el siguiente paquete
```
npm install react-icons
```
Pero hay que leer la documentacion porque por ejemplo tiene los iconos vscode, los de fontawesome, etc y para cada uno se importa de forma diferente, por ejemplo los de vs es 
import { VscBug } from "react-icons/vsc"
y luego dentro del boton metes el componente 

## Material ui ##
es una libreria multiproposito que tiene estilos, botones, calendarios, etc

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
