import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
const Edit = ({ list, setList }) => {
    const params = useParams()
    const [update, setUpdate] = useState('')
    const [newInput, setNewInput] = useState("")

    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        let newArr = [...list]
        let index = newArr.findIndex(x => x.id === parseInt(params.id))
        let obj = {
            text: newInput,
            id: update[0].id
        }
        newArr.splice(index, 1, obj)
        setList(newArr)
        navigate('/')
    }

    useEffect(() => {
        let toupdate = list.filter(item => item.id === parseInt(params.id))
        setUpdate(toupdate)
    }, [])
    if (!update) return <p>loading...</p>
    return (
        <div>
            <Navbar />
            <div>
                <h1>Edit</h1>
                <form onSubmit={submitHandler}>
                    <textarea
                        placeholder={update && update[0].text}
                        onChange={(e) => setNewInput(e.target.value)}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}
export default Edit











