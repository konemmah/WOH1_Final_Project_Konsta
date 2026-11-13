
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Holidays from './Holidays.jsx'
import Search from './Search.jsx'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Search/>
        <Holidays/>
        <Footer/>
      </>
    </BrowserRouter>
  )
}

export default App

