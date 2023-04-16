// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Body1 from './components/Navigation/Body1'

function App() {
<<<<<<< HEAD
=======
  // const [count, setCount] = useState(0)

>>>>>>> upstream/master
  return (
    <div className="App">
        <Routes>
<<<<<<< HEAD
          <Route path='/navigate/:id' element={<>       
=======

          <Route path='/navigate' element={<>
            <Navbar />
>>>>>>> upstream/master
            <Body1 />
          </>} />

          <Route path='/' element={<>
            <Navbar />
            <Body />
            <Footer />
          </>} />
        </Routes>
     

    </div>
  )
}

export default App
