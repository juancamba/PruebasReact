Basado en:

https://www.youtube.com/watch?v=6u1RHUoXIPI

Instalar vite:

https://carlosazaustre.es/react-vite

En una primera aprox, vemos esto, pero lo podemos extraer a una fucion para poder reusar. Es decir vamos a extraerlo a un hook

Un hook por convención se define como useNOMBRE_HOOK

```
function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((data)=>setData(data))

  },{});

  return (
    <>
    <h1>Usuario</h1>
    <ul>
      {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
    </ul>
    </>
  )
}
```



