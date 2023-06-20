import { useState } from 'react'

const Input = ({ list, setList }) => {
    const [userInput, setUserInput] = useState('')

    const handler = (e) => {
        e.preventDefault()
        let obj = {
            text: userInput,
            id: Date.now()
        }
        let newList = [...list]
        newList.push(obj)
        setList(newList)
        setUserInput('')
    }
    return (
        <div>
            <form onSubmit={handler}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Input