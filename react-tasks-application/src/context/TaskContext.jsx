import { createContext, useState ,useEffect} from "react";
import { tasks as data } from '../data/tasks'
export const TaskContext = createContext();
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])

    function createTask(task) {
        // aqui se crea la nueva taarea,recibe el titulo de la tarea y lo agrega a la lista
        setTasks([...tasks, { title: task.title, description: task.description, id: tasks.length }])
    }

    function deleteTask(taskid) {
        console.log("delete" + taskid)
        setTasks(tasks.filter(task => task.id !== taskid))
    }
    useEffect(() => (
        setTasks(data)
    ), []);


    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask

        }}>

            {props.children}
        </TaskContext.Provider>
    )
}

