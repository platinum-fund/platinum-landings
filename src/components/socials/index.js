import React from 'react'
import socials from './content'
import './socials.less'

import onscroll from './onscroll'

class SocialsSmart extends React.Component {
  componentDidMount() {
    onscroll()
  }

  render() {
    const className = `${this.props.sidebar ? 'socials_sidebar' : ''}`

    return (
      <div className={`socials ${className}`}>
        {socials.map((social, i) => (
          <a
            className="socials__link"
            href={social.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            key={`socialsSlide${i}`}
          >
            <img className="socials__icon" src={social.icon} />
          </a>
        ))}
      </div>
    )
  }
}
export default SocialsSmart
