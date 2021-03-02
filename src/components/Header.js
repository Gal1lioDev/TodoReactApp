import Add from './Add.js'
const Header = () => {
    return (
        <div>
            <h2 className="TodoHeader"style={TodoStyle}>Todo List <Add /></h2> 
        </div>
    )
}

const TodoStyle = {
    position: "relative",
    left: "10px",
    display: "flex"

}

export default Header