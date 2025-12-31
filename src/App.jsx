import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Layout from './components/Layout'
import CursorBlack from './components/CursorBlack'

const App = () => {
  return (
    <div className=' h-auto bg-[#dfdfdf] overflow-hidden '>
       <CursorBlack />
      <Layout/>
    </div>
  )
}

export default App
