import React from 'react'
import './section_business-growth.less'
import raiseCryptoImage from 'src/images/section-business-growth/raise-crypto.png'
import timeImage from 'src/images/section-business-growth/time.png'
import middlemanImage from 'src/images/section-business-growth/middleman.png'
import accessImage from 'src/images/section-business-growth/access.png'
import equityImage from 'src/images/section-business-growth/equity.png'
import Socials from 'src/components/socials'

const BusinessGrowthPure = () => (
  <section className="section_business-growth">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section ">How tokenization will</h2>
        <h2 className="title title_type_section _orange ">
          growth your business
        </h2>
      </div>
      <div className="wrapper_cards">
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={equityImage} />
          <h6 className="card__title">Equity development</h6>
          <p className="card__description">
            Platinum provides companies with a code which allows to manage their
            equity issuance.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={raiseCryptoImage} />
          <h6 className="card__title">Сryptocurrency fundraising</h6>
          <p className="card__description">
            Fundraising in crypto gives you the access to new investors.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={timeImage} />
          <h6 className="card__title">Unstoppable market</h6>
          <p className="card__description">
            Immediate access to trading from any place in the world.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={middlemanImage} />
          <h6 className="card__title">No intermediaries</h6>
          <p className="card__description">
            Platinum eliminates the middleman and financial structures, which
            cause more troubles with deployment of equity.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={accessImage} />
          <h6 className="card__title">Access to billions of unbanked </h6>
          <p className="card__description">
            There is a huge number of unbanked, which creates another market,
            and Platinum holds the key to it.
          </p>
        </div>
      </div>
    </div>
    <Socials sidebar />
  </section>
)

export default BusinessGrowthPure
