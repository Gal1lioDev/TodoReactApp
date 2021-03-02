import Header from './Header.js'
import Tasks from './Tasks.js'
import AddTask from './AddTask.js'
import { useState } from 'react'

function Box() {
    const [tasks, setTasks] = useState(
    [
        {
            id: '1',
            text: "Doctor's Appointment",
            day: "Today",
            reminder: true
        },
        {
            id: '2',
            text: "School",
            day: "Today",
            reminder: true
        },
        {
            id: '3',
            text: "Gym",
            day: "Today",
            reminder: false
        }
    ]
    )
    const changeReminder = (Id) =>{
        setTasks(
            tasks.map(
                (task) => task.id === Id ? {...task, reminder: !task.reminder} : task
                )
        )
    }
 
    const getLastId = (li) => {
        if (tasks.length !== 0){
        var lastTask = tasks[li]
        console.log(li)
        console.log(lastTask)
        return(lastTask.id)
        }else{
            return (0)
        }
    }
    const addTask = (Task) => {
        const id = parseInt(getLastId(tasks.length - 1)) + 1
        //const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...Task}
        setTasks([...tasks, newTask])
        console.log(tasks)
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    return (
        <div>
            <div style={ BoxStyle } className="Box">
                <Header />
                <AddTask onSave={addTask}/>
                {tasks.length > 0 ? <Tasks setreminder={changeReminder} onDelete={deleteTask} tasks={tasks}/> : <h5 style={{marginLeft: "10px"}}>No Task To Show</h5>}
                
            </div>
        </div>
    )
}

const BoxStyle = {
    height: "auto",
    width: "300px",
    border: "3px solid",
    position: "relative",
    left: "340px",
    top: "-2px",
    borderRadius: "15px",
    boxShadow: "10px 5px"
}

export default Box