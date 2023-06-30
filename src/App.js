import { useState } from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Edit from "./pages/Edit"
import Navbar from "./components/Navbar"

const App = () => {
  const [list, setList] = useState([
    {
        text: 'water plants',
        id: Date.now()
    },
])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<Home list={list} setList={setList}/>}
          />
          <Route 
            path="edit/:id" 
            element={<Edit list={list} setList={setList}/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App