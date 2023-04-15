import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes>
        
      <Route path='/navigate' element={<>
          <Navbar />
          <h1>Navigate</h1>
          <Footer />
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
