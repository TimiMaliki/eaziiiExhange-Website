
import './App.css'
import Navbar from './components/Navbar'
import Prop from './components/Prop'
import Hero from './components/Hero'
import About from './components/About'
import Misconcept from './components/Misconcept'
import Secure from './components/Secure'
import  Service from './components/Service'
import GiftCards from './components/GiftCards'
import Offers from './components/Offers'
import Contact from "./components/Contact"
import   Faq  from  './components/Faq'
import Footer from './Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Prop title="About Us" />
    <About/>
    <Misconcept/>
    <Secure/>
    <Prop  title="Services"/>
    <Service props={<Prop />}/>
    <GiftCards/>
    <Prop title="Special Offers" />
    <Offers />
    <Contact />
    <Faq/> 
    <Footer/>
    </>
  )
}

export default App
