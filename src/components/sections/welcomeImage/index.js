import React from 'react'
import './section_welcome-image.less'
import backgroundImage from './images/background-usdq.png'

const WelcomeImage = () => (
  <section className="section_welcome-image">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h1 className="title title_type_main _white">
            decentralized stable trading asset collateralized by bitcoin
          </h1>
          <h4 className="title title_type_second">1 USDq = 1$</h4>
          <button
            className="button js-popup__button"
            data-popup-id="onePageUsdq"
          >
            OnePager
          </button>
        </div>
      </div>
    </div>
    <img className="section_welcome-image__background" src={backgroundImage} />
  </section>
)

export default WelcomeImage
