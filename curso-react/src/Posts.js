import { VscBug } from "react-icons/vsc"


export const Posts = ()=>{
    return <button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.comf/posts")
        .then(response=>(response.json()))
        .then(data=>console.log(data))
        .catch(e=>console.error(e))
    }}>
        
        <VscBug/>
        Traer datos
    </button>

}