import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Ui from './pages/UI'
import Uidetails from './components/ui/Uidetails'
import ReackUi from './components/react/ReackUi'
import ReactUiDetails from './components/react/ReactUiDetails'
import Command from './pages/Command'
import Career from './pages/Career'
import Ai from './pages/Ai'
import Extension from './pages/Extention'


const App = () => {
  return (
    <>
    <Header />
    <main>


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/ui' element={<Ui />} />
      <Route path="/ui/:id" element={<Uidetails />} />
      <Route path='/reactui' element={<ReackUi />} />
      <Route path="/reactui/:id" element={<ReactUiDetails />} /> 
      <Route path='/command' element={<Command />} />
      <Route path='/career' element={<Career />} />
      <Route path='/ai' element={<Ai />} />
      <Route path="/extention" element={<Extension />} />

      
    </Routes>

    </main>
    <Footer/>
    
    </>
  )
}

export default App