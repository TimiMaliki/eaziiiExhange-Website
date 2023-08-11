
import './App.css'
import Navbar from './components/Navbar'
import Prop from './components/Prop'
import Hero from './components/Hero'
import About from './components/About'
import  Service from './components/Service'
import   Faq  from  './components/Faq'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Prop title="About Us" />
    <About/>
    <Service/>
    <Faq/> 
    </>
  )
}

export default App
