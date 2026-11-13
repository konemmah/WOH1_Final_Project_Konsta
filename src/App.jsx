
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Checklist from './checklist.jsx'
import Search from './Search.jsx'
import Register from './register.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/Search" element={<Search/>} />
          <Route path="/Checklist" element={<Checklist/>} />
          <Route path="/Register" element={<Register/>} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  )
}

export default App

