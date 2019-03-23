import React from 'react'
import './popup.less'

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

  render() {
    const popUpClass = this.state.popUpOpenStatus
      ? 'js-popup__open'
      : 'js-popup__close'

    return (
      <div
        className={'js-popup popup' + ' ' + popUpClass}
        data-popup-id={this.props.popupId}
      >
        <div className="popup__box" onClick={this.handlePopupCloseClick}>
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
