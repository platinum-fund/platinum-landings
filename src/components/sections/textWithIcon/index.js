import React from 'react'
import './section_text-with-icon.less'
import AcquirableIcon from './images/acquirable.svg'
import BitcoinBackedIcon from './images/bitcoin-backed.svg'
import DezentralizedIcon from './images/dezentralized.svg'
import SelfAssertingIcon from './images/self-asserting.svg'
import StableIcon from './images/stable.svg'
import SustainableIcon from './images/sustainable.svg'

const TextWithIcon = () => (
  <section className="section_text-with-icon">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_main _white">What is USDQ ?</h2>
          <h4 className="title title_type_second">
            USDQ is a unique digital utility stable cryptocurrency that
            represents the future of money.
          </h4>
        </div>
      </div>
      <section className="text-with-icon">
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Stable</h3>
            <div className="text-with-icon__icon">
              <img alt="Stable" src={StableIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            An improved mechanism for maintaining stability of the currency,
            based on the latest modern developments in the field of crypto
            industry
          </p>
        </article>
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Decentralized</h3>
            <div className="text-with-icon__icon">
              <img alt="Decentralized" src={DezentralizedIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            USDQ is built in a transparent and clear way independently from
            banks or any other financial institutions
          </p>
        </article>
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Sustainable</h3>
            <div className="text-with-icon__icon">
              <img alt="Sustainable" src={SustainableIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            Our ecosystem maintains and guarantees the blockchain covers costs
            to keep going for infinity.
          </p>
        </article>
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Bitcoin-backed</h3>
            <div className="text-with-icon__icon">
              <img alt="Bitcoin-backed" src={BitcoinBackedIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            Every USDQ token is backed and correctable by bitcoin.
          </p>
        </article>
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Acquirable</h3>
            <div className="text-with-icon__icon">
              <img alt="Acquirable" src={AcquirableIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            Request an audit of financial information anytime.
          </p>
        </article>
        <article className="text-with-icon__item">
          <div className="text-with-icon__top">
            <h3 className="text-with-icon__text">Self-asserting</h3>
            <div className="text-with-icon__icon">
              <img alt="Self-asserting" src={SelfAssertingIcon} />
            </div>
          </div>
          <p className="text-with-icon__text">
            USDQ implemented blockchain technology and uses smart contracts that
            enable sophisticated cryptographic security.
          </p>
        </article>
      </section>
    </div>
  </section>
)

export default TextWithIcon
