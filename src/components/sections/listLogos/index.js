import React from 'react'
import './section_list-logos.less'
import CoinsuperLogo from './images/coinsuper.png'
import HitbtcLogo from './images/hitbtc.png'
import BinanceLogo from './images/binance.svg'
import HuobiLogo from './images/huobi.svg'
import ExratesLogo from './images/exrates.png'
import CoinbeneLogo from './images/coinbene.png'
import TopbtccomLogo from './images/topbtccom.png'
import LblnkLogo from './images/lblnk.png'
import BtcalphaLogo from './images/btcalpha.png'
import YobitnetLogo from './images/yobitnet.png'
import LatokenLogo from './images/latoken.png'
import BitzLogo from './images/bitz.png'
import QuoineLogo from './images/quoine.png'
import OkexLogo from './images/okex.svg'
import CobinhoodLogo from './images/cobinhood.png'
import MercstoxLogo from './images/mercstox.png'

const ListLogos = () => (
  <section className="section_list-logos">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_main _white">
            We are planning to be listed on the following exchanges:
          </h2>
        </div>
      </div>
      <div className="list-logos">
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={CoinsuperLogo}
            alt="Coinsuper"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={HitbtcLogo} alt="Hitbtc" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={BinanceLogo} alt="Binance" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={HuobiLogo} alt="Huobi" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={ExratesLogo} alt="Exrates" />
        </div>
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
            src={TopbtccomLogo}
            alt="Topbtccom"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={LblnkLogo} alt="Lblnk" />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={BtcalphaLogo}
            alt="Btcalpha"
          />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={YobitnetLogo}
            alt="Yobitnet"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={LatokenLogo} alt="Latoken" />
        </div>
        <div className="list-logos__item list-logos__item_height_auto">
          <div className="list-logos__plus">
            <span>+</span> <strong>100</strong>
          </div>
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={BitzLogo} alt="Bitz" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={QuoineLogo} alt="Quoine" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={OkexLogo} alt="Okex" />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={CobinhoodLogo}
            alt="Cobinhood"
          />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={MercstoxLogo}
            alt="Mercstox"
          />
        </div>
        {/*<button className="list-logos__item list-logos__item_button">*/}
        {/*View more*/}
        {/*</button>*/}
      </div>
    </div>
  </section>
)

export default ListLogos
