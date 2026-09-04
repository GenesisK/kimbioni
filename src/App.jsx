import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import BackToTop from './Components/BackToTop/BackToTop'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
      <BackToTop />
    </div>
  )
}

export default App
