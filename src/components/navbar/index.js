import React from 'react'
import NavbarPure from './NavbarPure'
import WithLanguageContext from 'src/contexts/language/WithLanguageContext'
import getLinks from './links'

class NavbarSmart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuShown: false
    }
  }

  toggleMenu = e => {
    e.preventDefault()
    this.setState({ isMenuShown: !this.state.isMenuShown })
  }

  closeMenu = e => {
    e.preventDefault()
    this.setState({ isMenuShown: false })
  }

  render() {
    const i18nLinks = getLinks(this.props.language)

    return (
      <NavbarPure
        isMenuShown={this.state.isMenuShown}
        toggleMenu={this.toggleMenu}
        closeMenu={this.closeMenu}
        links={i18nLinks}
      />
    )
  }
}

export default WithLanguageContext(NavbarSmart)
