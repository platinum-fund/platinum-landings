import React from 'react'
import socialIcons from './icons/socials'

const Socials = ({ name, link }) => (
  <a className="it-member__social" href={link} target="_blank">
    <img
      className="it-member__social-icon"
      src={socialIcons[name]}
      alt={name}
    />
  </a>
)

export default Socials
