import { useFetch } from './useFetch'


import './App.css'

function App() {
  // la funcion useFetch retorna 3 cosas
  const{data, loading,error, handleCancelRequest} = useFetch("https://jsonplaceholder.typicode.com/users");
// minuto 15:20
  return (
    <>
    <h1>Usuario</h1>
    <button onClick={handleCancelRequest}>Cancel Request</button>
    <ul>
      {error && <li>Error{error}</li>}
      {loading && <li>Loading.. </li>}
      {data?.map((user)=>(<li key={user.id}>{user.name}</li>))}
    </ul>
    </>
  )
}

export default App
