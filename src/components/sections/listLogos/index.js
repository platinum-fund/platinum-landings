import React from 'react'
import './section_list-logos.less'
import CoinbeneLogo from './images/coinbene.png'
import BtcalphaLogo from './images/btcalpha.png'
import OkexLogo from './images/okex.svg'
import BitforexLogo from './images/bitforex-full.png'
import BtcnextLogo from './images/btcnext.svg'

const ListLogos = () => (
  <section className="section_list-logos">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_main _white">
            We are confident our stable asset will be in a big demand and will
            be listed on a large number of exchanges:
          </h2>
        </div>
      </div>
      <div className="list-logos">
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={CoinbeneLogo}
            alt="Coinbene"
          />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={BtcalphaLogo}
            alt="Btcalpha"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={OkexLogo} alt="Okex" />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={BitforexLogo}
            alt="Bitforex"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={BtcnextLogo} alt="BTCNEXT" />
        </div>
        <div className="list-logos__item list-logos__item_height_auto">
          <div className="list-logos__plus">
            <span>+</span> <strong>20</strong>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ListLogos
