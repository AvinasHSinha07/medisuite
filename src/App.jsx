import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='h-screen flex flex-col'>
       <Navbar></Navbar>
     
       <Outlet></Outlet>
      
       <Footer></Footer>
  </div>
  )
}

export default App
