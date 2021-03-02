
import Task from './Task.js'

const Tasks = ({ tasks, onDelete, setreminder }) => {

    return (
        
        <div>
            {tasks.map((task, index) => (
                <Task key={index} onToggle={setreminder} onDelete={() => onDelete(task.id)} style={tasksStyle} task={task} className="tasks"/>
            ))}
        </div>
    )
}

const tasksStyle = {
    position: "relative",
    left: "10px",
    margin: "0px"
}

export default Tasks