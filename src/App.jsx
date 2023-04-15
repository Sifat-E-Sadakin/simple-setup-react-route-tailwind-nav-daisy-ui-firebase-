import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Nav></Nav>

     <Outlet></Outlet>
    </div>
  )
}

export default App
