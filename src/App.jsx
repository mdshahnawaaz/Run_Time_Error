import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SectionTwo from './components/SectionTwo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello</h1>
       */}
      <div style={{backgroundColor:'#80808033'}}>
        <Navbar />
        <HeroSection/>
        <SectionTwo/>
        <Footer />
      </div>
      
    </>
  )
}

export default App
