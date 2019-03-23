import React from 'react'
import NavbarPure from './NavbarPure'

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
    return (
      <NavbarPure
        isMenuShown={this.state.isMenuShown}
        toggleMenu={this.toggleMenu}
        closeMenu={this.closeMenu}
      />
    )
  }
}

export default NavbarSmart
