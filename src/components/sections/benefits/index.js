import React from 'react'
import './benefits.less'

import eyeImage from '../../../images/section-benefit/1.png'
import coinImage from '../../../images/section-benefit/2.png'
import cardsImage from '../../../images/section-benefit/10.png'
import zoomImage from '../../../images/section-benefit/3.png'
import clockImage from '../../../images/section-benefit/5.png'
import workerImage from '../../../images/section-benefit/6.png'
import mobileImage from '../../../images/section-benefit/7.png'
import lockImage from '../../../images/section-benefit/4.png'
import manImage from '../../../images/section-benefit/8.png'
import grafImage from '../../../images/section-benefit/9.png'

const Benefits = () => (
  <section className="section-benefits" id="cases">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">PLATFORM</h2>
        <h2 className="title title_type_section _orange">FEATURES</h2>
        <h2 className="title title_type_section">AND</h2>
        <h2 className="title title_type_section _orange">BENEFITS</h2>
        <h4 className="title title_type_subtitle">
          Fully castomisable solution
        </h4>
      </div>
      <div className="wrapper_cards">
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={eyeImage} />
          <h6 className="card__description-big">
            User-Friendly
            <span className="card__description-big--orange">design</span>
          </h6>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={coinImage} />
          <h6 className="card__description-big">
            Receive payments in
            <span className="card__description-big--orange">
              1,070 crypto currencies
            </span>
          </h6>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={cardsImage} />
          <h6 className="card__description-big">
            Receive payments via
            <span className="card__description-big--orange">
              Visa/Mastercard
            </span>
          </h6>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={zoomImage} />
          <h6 className="card__description-big">
            Precise and detailed
            <span className="card__description-big--orange">
              analytics section
            </span>
            to manage and save your marketing budget
          </h6>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={clockImage} />
          <h6 className="card__description-big">
            Fast
            <span className="card__description-big--orange">
              system deployment
            </span>{' '}
            within
            <span className="card__description-big--orange">ONE DAY</span>
            only
          </h6>
        </div>

        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={workerImage} />
          <h6 className="card__description-big">
            Integrated system for
            <span className="card__description-big--orange">KYC</span>
            checks of your customers
          </h6>
        </div>

        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={mobileImage} />
          <h6 className="card__description-big">
            <span className="card__description-big--orange">
              Dividend structure issuance
            </span>
            via Smart Contract
          </h6>
        </div>

        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={lockImage} />
          <h6 className="card__description-big">
            Top notch
            <span className="card__description-big--orange">security</span>
            and
            <span className="card__description-big--orange">DDOS</span>
            protection
          </h6>
        </div>

        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={manImage} />
          <h6 className="card__description-big">
            Token sale
            <span className="card__description-big--orange">configuration</span>
          </h6>
        </div>

        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={grafImage} />
          <h6 className="card__description-big">
            STO
            <span className="card__description-big--orange">managment</span>
          </h6>
        </div>
      </div>
    </div>
  </section>
)

export default Benefits
