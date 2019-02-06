import React from 'react'
import './section_platinum-business.less'
import ContactForm from 'src/components/contactForm'

const PlatinumBusiness = () => (
  <section className="section section_platinum-business">
    <div className="wrapper_section-content">
      <h2 className="headline">
        <span className="title title_type_section-big">Let’s talk about</span>
        <span className="title title_type_section-big-attention">business</span>
      </h2>
      <div className="section__preface">
        <img
          className="image"
          src={require('src/images/section-platinum-business/anton.png')}
        />
        <div className="card card_theme_main">
          <h4 className="card__title">
            We sell
            <span className="card__title-attention">30%</span>
          </h4>
          <div className="card__description">
            <h6 className="card__description-item">
              Our cost now
              <span className="card__description-attention">$12 000 000</span>
            </h6>
            <h6 className="card__description-item">
              Yearly turnover
              <span className="card__description-attention">$9 000 000</span>
            </h6>
            <h6 className="card__description-item">
              Yearly income
              <span className="card__description-attention">$1 000 000</span>
            </h6>
          </div>
        </div>
      </div>
      <div className="wrapper_cards">
        <div className="card card_theme_features-list">
          <h6 className="card__title">Why does it cost so?</h6>
          <div className="card__description">
            <img
              className="card__image"
              src={require('src/images/section-platinum-business/cost.png')}
            />
            <p className="card__list">
              - average monthly revenue
              <span className="card__description-attention"> $80,000 </span>
              <br />- in our company the professional are from
              <span className="card__description-attention">
                15 countries 112 employees{' '}
              </span>
              <br />-{' '}
              <span className="card__description-attention">
                {' '}
                the biggest listing provider{' '}
              </span>{' '}
              on the cryptomarket (92 exchanges)
              <br />- offices in Japan, Korea, Thailand, Belarus
            </p>
          </div>
        </div>
        <div className="card card_theme_features-list">
          <h6 className="card__title">Our plans for development</h6>
          <div className="card__description">
            <img
              className="card__image"
              src={require('src/images/section-platinum-business/investment.png')}
            />
            <p className="card__list">
              - implementation of our
              <span className="card__description-attention">own wallet</span>
              and
              <span className="card__description-attention">exchange</span>
              <br />
              - continue improving our STO platform
              <br />- attract accredited investors on STO market, which is
              easier than IPO, but more secure, than ICO.
            </p>
          </div>
        </div>
        <div className="card card_theme_features-list">
          <h6 className="card__title">
            What will the investor get after buying our tokens?
          </h6>
          <div className="card__description">
            <img
              className="card__image"
              src={require('src/images/section-platinum-business/plan.png')}
            />
            <p className="card__list">
              - <span className="card__description-attention">dividents </span>
              based on the company's income
              <br />-{' '}
              <span className="card__description-attention">
                {' '}
                equity tokens{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
      <ContactForm label="Get a detailed roadmap" />
    </div>
  </section>
)

export default PlatinumBusiness
