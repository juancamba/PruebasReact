
import { useState, useEffect } from "react";

export function useFetch(url){
    //defino el estado setdata y los datos en data
    const [data, setData] = useState(null);
    //defino el estado loading
    const [loading,setLoading]=useState(true);
    //defino el estado error para ver si ha habido un error
    const [error, setError]=useState(null);

    const[controller, setController]=useState(null);

    useEffect(()=>{
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

      fetch(url, {signal:abortController.signal})
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .catch((error)=>{
            if(error.name==="AbortError"){
                console.log("REquest cancelado");
            }else{
                setError(error);
            }
            
        }
        )
        .finally(()=>setLoading(false));
        
        return()=>abortController.abort();
    },{});

    const handleCancelRequest=()=>{
        if(controller)
        {
            controller.abort();
            setError("Request cancelled.. vieja");
        }
        
    }

    // retornamo el array como objeto
    return {data, loading, error, handleCancelRequest};


}
