import React from 'react'
import './section_platinum-business.less'
import ContactForm from 'src/components/contactForm'

const PlatinumBusiness = () => (
  <section className="section_platinum-business">
    <div className="wrapper_shrink">
      <h2 className="headline">
        <span className="title title_type_section-big">Let’s talk about</span>
        <span className="title title_type_section-big-attention">business</span>
      </h2>
      <div className="section__preface">
        <img className="" />
        <div className="card card_theme_main">
          <h4 className="card__title">We sell 30%</h4>
          <h6 className="card__description">
            Our cost now $12 000 000
            <br />
            Yearly turnover $9 000 000
            <br />
            Yearly income $1 000 000
          </h6>
        </div>
      </div>
      <div className="wrapper_cards">
        <div className="card card_theme_features-list">
          <h6 className="card__title">Why does it cost so?</h6>
          <div className="card__description">
            <img className="card__image" />
            <p className="card__list">
              - average monthly revenue $80,000
              <br />
              - in our company the professional are from 15 countries 112
              employees
              <br />
              - the biggest listing provider on the cryptomarket (92 exchanges)
              <br />- offices in Japan, Korea, Thailand, Belarus
            </p>
          </div>
        </div>
        <div className="card card_theme_features-list">
          <h6 className="card__title">Our plans for development</h6>
          <div className="card__description">
            <img className="card__image" />
            <p className="card__list">
              - implementation of our own wallet and exchange
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
            <img className="card__image" />
            <p className="card__list">
              - dividents based on the company's income
              <br />- equity tokens
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
)

export default PlatinumBusiness
