
const Task = ({ task, onDelete, onToggle}) => {

    return(
        <div onDoubleClick={() => onToggle(task.id)} style={task.reminder === true ? taskStyle1 : taskStyle} className="task" id="task">
            <h5 style={{position: "relative", top: "4px", marginBottom: "3px"}} className="taskBox" >{task.id}. {task.text}</h5>
            <p style={{fontSize: "2px", margin: "0px", position: "relative", left: "11px", bottom: "6px"}}>{task.day}</p>
            <button onClick={onDelete} style={buttonStyle}>Delete</button>
        </div>
    )
}


const taskStyle = {
    marginLeft: "10px",
    backgroundColor: "rgb(184, 184, 184)",
    borderRadius: "5px",
    width: "90%",
    paddingLeft: "5px",
    height: "43px",
    marginBottom: "20px",
    marginTop: "0px"
}
const taskStyle1 = {
    marginLeft: "10px",
    backgroundColor: "rgb(184, 184, 184)",
    borderRadius: "5px",
    width: "90%",
    paddingLeft: "5px",
    height: "43px",
    marginBottom: "20px",
    marginTop: "0px",
    borderLeft: "4px solid green"
}

const buttonStyle = {
    borderRadius: "5px",
    border: "none",
    position: "relative",
    left: "207px",
    bottom: "43px",
    height: "22px",
    backgroundColor: "red",
    color: "white",
    margin: "0px"

}
export default Task