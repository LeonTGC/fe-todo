import Input from "../components/Input"
import Card from "../components/Card"
const Home = ({ list, setList }) => {

    let deleteHandler = (id) => {
        let newArr = [...list]
        newArr = newArr.filter(item => item.id !== id)
        console.log(newArr)
        setList(newArr)
    }

    return (
        <div>
            <h1>home</h1>
            <div>
                <Input list={list} setList={setList} />
                <div>
                    {list.map((item, index) => {
                        return <Card deleteHandler={() => deleteHandler(item.id)} item={item} setList={setList} />
                    })}
                </div>
            </div>
        </div>
    )
}
export default Home









