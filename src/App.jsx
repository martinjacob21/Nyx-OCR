import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {
 

  return (
    <>
    <Header></Header>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home></Home>} />
     </Routes>
     </BrowserRouter>
     <Footer></Footer>
    </>
  )
}

export default App
