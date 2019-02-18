import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SectionsNavbar = ({ navigation }) => (
  <div className="card card_theme_navigation">
    {navigation.links.map(link => (
      <AnchorLink className="card__item" href={link.href}>
        <span>{link.name}</span>
      </AnchorLink>
    ))}
  </div>
)

export default SectionsNavbar
