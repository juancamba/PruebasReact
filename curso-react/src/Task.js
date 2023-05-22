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
