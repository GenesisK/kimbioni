import { useEffect, useState } from 'react'
import './BackToTop.css'
import upArrow from '../../assets/up-arrow.svg'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label='Voltar ao topo'
      tabIndex={visible ? 0 : -1}
    >
      <img src={upArrow} alt='' aria-hidden='true' />
    </button>
  )
}

export default BackToTop
