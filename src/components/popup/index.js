import React from 'react'
import './popup.less'
import './popup_theme_pdf-viewer.less'

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popUpOpenStatus: false
    }
    this.handlePopupOpenClick = this.handlePopupOpenClick.bind(this)
    this.handlePopupCloseClick = this.handlePopupCloseClick.bind(this)
  }

  componentDidMount() {
    for (let button of document.getElementsByClassName('js-popup__button')) {
      button.onclick = this.handlePopupOpenClick
    }
  }

  handlePopupOpenClick() {
    this.setState({ popUpOpenStatus: true })
  }

  handlePopupCloseClick() {
    this.setState({ popUpOpenStatus: false })
  }

  handleOutsideClick = e => {
    e.preventDefault()
    const target = e.target.classList.value

    if (target.includes('popup__box')) {
      this.handlePopupCloseClick()
    }
  }

  render() {
    const { theme } = this.props

    const popUpClass = this.state.popUpOpenStatus
      ? 'js-popup__open'
      : 'js-popup__close'

    const themeClassName = theme ? `popup_theme_${theme}` : 'popup'
    const className = `js-popup ${popUpClass} ${themeClassName}`

    return (
      <div
        className={className}
        onClick={this.handleOutsideClick}
        data-popup-id={this.props.popupId}
      >
        <div className="popup__box">
          <div className="popup__container">
            {this.props.content}
            <button
              className="js-popup__button-close popup__button-close"
              onClick={this.handlePopupCloseClick}
            >
              close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Popup
