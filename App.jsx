import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddProduct from './components/AddProduct'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/T' element={<AddProduct/>} />
        </Routes>
    </>
  )
}

export default App
