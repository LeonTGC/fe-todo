import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const Edit = ({ list, setList }) => {
    const params = useParams()
    const [update, setUpdate] = useState('')
    const [newInput, setNewInput] = useState("")

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
    }

    useEffect(() => {
        let toupdate = list.filter(item => item.id === parseInt(params.id))
        setUpdate(toupdate)
    }, [])
    if (!update) return <p>loading...</p>
    return (
        <div>
            <p>edit</p>
            <form onSubmit={submitHandler}>
                <textarea
                    placeholder={update && update[0].text}
                    onChange={(e) => setNewInput(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Edit











