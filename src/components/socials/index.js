import React from 'react'
import socials from './content'
import './socials.less'

const Socials = () => (
  <div className="socials">
    {socials.map(social => (
      <a
        className="socials__link"
        href={social.link}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <img className="socials__icon" src={social.icon} />
      </a>
    ))}
  </div>
)

export default Socials
