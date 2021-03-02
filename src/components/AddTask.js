import { useState } from "react"

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text){
            alert('Please add a task')
        }
        if (!day){
            alert('if there is no deadline, please enter None')
        }else{
    

        
        onSave({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
        }
    }
    return (
        <form id="addTaskArea" onSubmit={onSubmit}>
            <div style={style1}>
                <label style={{marginRight: "100px"}}>Add a Task</label>
                <input style={inputStyle} type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div style={style1}>
                <label>Set Day and Time</label>
                <input style={inputStyle} type="text" placeholder="Set Day and Time" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div style={style1}>
                <label>Set Reminder</label>
                <input style={{marginLeft: "100px",}} checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input style={submitBoxStyle} type="submit" value="Save Task"/>
        </form>
    )
}

const style1 = {
    display: "block",
    marginLeft: "10px"
}

const submitBoxStyle = {
    width: "93%",
    marginLeft: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    border: "0.5px solid",
    marginTop: "10px",
    color: "white",
    backgroundColor: "black"
}

const inputStyle = {
    marginLeft: "2px",
    borderRadius: "8px",
    border: '1px solid',
    marginBottom: "10px",
    paddingLeft: "5px",
    width: "93%"
}

export default AddTask