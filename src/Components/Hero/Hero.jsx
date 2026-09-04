import './Hero.css'
import profileImg from '../../assets/profileImage.jpg'

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <img className='animation-border' src={profileImg} alt="Kim Bioni" />
      <h1><span>Kim Bioni</span></h1>
      <span className='hero-divider' aria-hidden="true"></span>
      <h2>Automação de processos com Python, SQL e Oracle.</h2>
    </section>
  )
}

export default Hero
