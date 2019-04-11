import React from 'react'
import './section_welcome-image.less'
import backgroundImage from './images/background-usdq.png'
import Blockquote from '../blockquote'

const WelcomeImage = () => (
  <section className="section_welcome-image">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h1 className="title title_type_main _white">
            it's a fully decentralized stable trading asset (collateralized by
            BTC)
          </h1>
          <h4 className="title title_type_second">1 USDQ = $1</h4>
          <button
            className="button js-popup__button"
            data-popup-id="onePageUsdq"
          >
            OnePager
          </button>
        </div>
      </div>
    </div>
    <Blockquote />
    <img className="section_welcome-image__background" src={backgroundImage} />
  </section>
)

export default WelcomeImage
