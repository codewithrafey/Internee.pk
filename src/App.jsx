import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Internship from './pages/Internship'
import About from './pages/About'
import Contact from './pages/Contact'
import InternshipDetails from './pages/InternshipDetails'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'  element={ <Home /> }/>
      <Route path='/internship'  element={ <Internship /> }/>
      <Route path='/internship/:id'  element={ <InternshipDetails /> }/>
      <Route path='/about'  element={ <About /> }/>
      <Route path='/contact'  element={ <Contact /> }/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App