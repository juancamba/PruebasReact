export function Gretings(props) {

  return <h1>Componente de react: {props.title} : {props.name}</h1>;
}

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
