import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import 'react-social-icons/whatsapp'
import { socialLinks } from '../../data/socialLinks'
import './SocialLinks.css'

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`social-links ${className}`.trim()}>
      {socialLinks.map(({ name, network, url }) => (
        <SocialIcon
          key={name}
          className="social-links_icon"
          target="_blank"
          rel="noopener noreferrer"
          url={url}
          network={network === 'whatsapp' ? 'whatsapp' : undefined}
          bgColor="transparent"
          aria-label={name}
        />
      ))}
    </div>
  )
}

export default SocialLinks
