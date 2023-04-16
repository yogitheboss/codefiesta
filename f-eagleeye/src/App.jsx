import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Body1 from './components/Navigation/Body1'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/navigate/:id' element={<>       
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
