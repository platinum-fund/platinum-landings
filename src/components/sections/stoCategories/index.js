import React from 'react'
import './sto-categories.less'
import firstImage from '../../../images/section-sto-overview/1.png'
import secondImage from '../../../images/section-sto-overview/2.png'
import thirdImage from '../../../images/section-sto-overview/3.png'

const StoCategories = () => (
  <section className="section section_categories">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">THE ARE</h2>
        <h2 className="title title_type_section _orange">3 MAIN CATEGORIES</h2>
        <br />
        <h2 className="title title_type_section">OF TOKENIZATION ACHIEVED VIA AN</h2>
         <h2 className="title title_type_section _orange">STO</h2>
      </div>
      <div className="wrapper_cards">
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={firstImage} />
            <h6 className="card__title">Equity Tokens</h6>
            <p className="card__description">An STO where each token is secured against stock in
              your company providing token holders equivalent rights to voting and dividend issuance
              as your actual stockholders.</p>
          </div>
        </div>
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={secondImage} />
            <h6 className="card__title">Reserve Assets Token</h6>
            <p className="card__description">Organizations that trade in real-world physical
              commodities such as Gold, Real Estate etc., can launch an STO where the tokens are
              secured by reserves in your underlying asset base.</p>
          </div>
        </div>
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={thirdImage} />
            <h6 className="card__title">Debt Token</h6>
            <p className="card__description">Rather than tokenizing your stock or asset reserves,
              funds can be raised by issuing Security Tokens in the form of debt with the promise of
              payback to investors</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default StoCategories
