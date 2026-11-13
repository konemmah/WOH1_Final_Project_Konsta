
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Checklist from './checklist.jsx'
import Search from './Search.jsx'
import Register from './register.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default App

