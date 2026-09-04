import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profileImage2.jpg'
import Skills from './Carousel/Skills'


const About = () => {
  return (
    <section id='about' className='about'>
      <div className="about-title">
        <h1>Sobre mim</h1>
        <img className='bg-img' src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="Kim Bioni" loading="lazy" />
        </div>
        <div className="about-right">
            <div className="about-pg">
                <p>Sou Assistente de Desenvolvimento com foco em RPA e automação de processos, atuando principalmente com Python, SQL e Oracle.</p>
                <p>No dia a dia, mapeio processos manuais e repetitivos, desenvolvo robôs que interagem com sistemas desktop e bancos de dados, e trato os dados antes que cheguem aos sistemas corporativos — reduzindo retrabalho e inconsistência entre eles.</p>
                <p>O objetivo é sempre o mesmo: menos execução manual, mais confiabilidade nos dados e processos operacionais mais previsíveis e fáceis de manter.</p>
            </div>
            <div className='habilidades'>
              <div className='habilidades-content'>
                  <p className='habilidades-title'>Tecnologias</p>
                  <img className='bg-img' src={theme_pattern} alt="" />
              </div>
            <Skills />
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
