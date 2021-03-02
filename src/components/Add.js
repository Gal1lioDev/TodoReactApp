function Add() {
    
    const onToggle = () => {
        var formArea = document.getElementById('addTaskArea')
        if (formArea.style.display === "none"){
            formArea.style.display = "block"
        }else if(formArea.style.display !== "none"){
            formArea.style.display = "none"
        }
    }
    return (
        <div>
            <button onClick={() => onToggle()} style={AddStyle} className="addButton" type="button">Add</button>
        </div>
    )
}

const AddStyle = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "3px",
    paddingBottom: "3px",
    borderRadius: "5px",
    marginLeft: "110px",
    marginBottom: "5px"
}

export default Add