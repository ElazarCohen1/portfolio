import '../css/App.css'

import Home from '../pages/Home'
import NavbarMenu from '../widget/navBar'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio.jsx'
import Contact from '../pages/Contact.jsx'
import MentionsLegales from './Mention_legale.jsx'


function App() {
  return (
    <>
    <header>
      <div >
        <NavbarMenu />
      </div>
    </header>
    <main>
      
    <section id='home' className='section'>
     <Home />
    </section>
     
    <section id='about' className='section'>
      <About />
    </section>
    
    <section id='portfolio' className='section'>
      <Portfolio />
    </section>

    <section id='contact' className='section'>
      <Contact />
    </section>
    
    <section>
      <MentionsLegales /> 
    </section>

    </main>
    
    </>
    
  )
}

export default App
