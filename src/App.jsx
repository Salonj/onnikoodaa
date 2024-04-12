import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  return (
    <div className='bg-primary-200'>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
