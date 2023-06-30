import { Link } from "react-router-dom"

const Card = ({ item, deleteHandler }) => {

    return (
        <div>
            <p>{item.text}</p>
            <div>
                <button onClick={deleteHandler}>delete</button>
                <Link to={`edit/${item.id}`}>
                    edit
                </Link>
            </div>
        </div>
    )
}
export default Card