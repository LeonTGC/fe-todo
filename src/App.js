import { useState } from "react"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Card from "./components/Card"
import Edit from "./pages/Edit"
import Navbar from "./components/Navbar"

const App = () => {
  const [list, setList] = useState([
    {
        text: 'test',
        id: Date.now()
    }
])

  return (
    <div>
      <BrowserRouter>
      <Navbar />
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