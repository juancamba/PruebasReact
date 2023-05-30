
import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    // si hago esto tengo todo el contexto pero solo quiero la funcion createTask
    // const value = useContext(TaskContext)
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        createTask({ title, description });
        // resetar formulario
        setTitle("")
        setDescription("")


    }
    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}
                className='bg-slate-800 p-10 mb-4'
            >
                <h1 className='text-2xl '></h1>
                <input type="text" placeholder="Write a task"
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />

                <textarea placeholder="Write a description"
                className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button
                className='bg-indigo-500 px-3 p-1 text-white'
                >Save</button>
            </form>
        </div>
    );
}

export default TaskForm