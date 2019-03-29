import React from 'react'
import './section_list-logos.less'
import CoinbeneLogo from './images/coinbene.png'
import BtcalphaLogo from './images/btcalpha.png'
import CoinsuperLogo from './images/coinsuper.png'
import BitforexLogo from './images/bitforex-full.png'
import BtcnextLogo from './images/btcnext.svg'
import CoinallLogo from './images/coinall.png'
import BcexLogo from './images/bcex.png'
import HotbitLogo from './images/hotbit.png'
import IdcmLogo from './images/idcm.png'
import IdaxLogo from './images/idax.png'
import P2pb2bLogo from './images/p2pb2b.png'
import C2cxLogo from './images/c2cx.png'
import KucoinLogo from './images/kucoin.png'

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
          <img className="list-logos__image" src={KucoinLogo} alt="Kucoin" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={C2cxLogo} alt="C2cx" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={P2pb2bLogo} alt="P2pb2b" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={IdaxLogo} alt="Idax" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={IdcmLogo} alt="Idcm" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={HotbitLogo} alt="Hotbit" />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={BcexLogo} alt="Bcex" />
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
            src={BtcalphaLogo}
            alt="Btcalpha"
          />
        </div>
        <div className="list-logos__item">
          <img className="list-logos__image" src={CoinallLogo} alt="Coinall" />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={BitforexLogo}
            alt="Bitforex"
          />
        </div>
        <div className="list-logos__item">
          <img
            className="list-logos__image"
            src={CoinsuperLogo}
            alt="Coinsuper"
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
