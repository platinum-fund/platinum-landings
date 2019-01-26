import React from 'react'
import './section_business-growth.less'
import raiseCryptoImage from 'src/images/section-business-growth/raise-crypto.png'
import timeImage from 'src/images/section-business-growth/time.png'
import middlemanImage from 'src/images/section-business-growth/middleman.png'
import accessImage from 'src/images/section-business-growth/access.png'
import equityImage from 'src/images/section-business-growth/equity.png'

const BusinessGrowthPure = () => (
  <section className="section _business-growth">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section display_inline">
          How tokenization will
        </h2>
        <h2 className="title _type_section _orange display_inline">
          growth your business
        </h2>
      </div>
      <div className="wrapper _cards">
        <div className="card _theme_light _type_column">
          <img className="card__image" src={equityImage} />
          <h6 className="card__title">Programmable Equity</h6>
          <p className="card__description">
            Polymath enables companies to take control of their equity issuance
            through programmable code.
          </p>
        </div>
        <div className="card _theme_light _type_column">
          <img className="card__image" src={raiseCryptoImage} />
          <h6 className="card__title">Raise in Cryptocurrency</h6>
          <p className="card__description">
            Raising in cryptocurrency opens up an entire wealth of new
            investors.
          </p>
        </div>
        <div className="card _theme_light _type_column">
          <img className="card__image" src={timeImage} />
          <h6 className="card__title">24/7 Access to Markets</h6>
          <p className="card__description">
            No matter where you live in the world, you have access to trading
            24/7.
          </p>
        </div>
        <div className="card _theme_light _type_column">
          <img className="card__image" src={middlemanImage} />
          <h6 className="card__title">Elimination of Middlemen</h6>
          <p className="card__description">
            Polymath eliminates the middleman and financial structures that
            hinder the deployment of equity.
          </p>
        </div>
        <div className="card _theme_light _type_column">
          <img className="card__image" src={accessImage} />
          <h6 className="card__title">Access to 2 Billion Unbanked</h6>
          <p className="card__description">
            There is a trove of wealth that is untouched by Wall Street that can
            now be accessed through Polymath.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default BusinessGrowthPure
