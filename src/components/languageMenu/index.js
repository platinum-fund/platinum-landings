import React from 'react'
import LanguageMenuPure from './LanguageMenuPure'

class LanguageMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLanguageMenuShown: false
    }
  }

  toggleLanguageMenu = e => {
    e.preventDefault()
    this.setState({ isLanguageMenuShown: !this.state.isLanguageMenuShown })
  }

  closeLanguageMenu = e => {
    e.preventDefault()
    this.setState({ isLanguageMenuShown: false })
  }

  render() {
    return (
      <LanguageMenuPure
        isLanguageMenuShown={this.state.isLanguageMenuShown}
        toggleLanguageMenu={this.toggleLanguageMenu}
        closeLanguageMenu={this.closeLanguageMenu}
      />
    )
  }
}

export default LanguageMenu
