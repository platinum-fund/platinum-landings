import React from 'react'
import './sto-categories.less'
import firstImage from '../../../images/section-sto-overview/1.png'
import secondImage from '../../../images/section-sto-overview/2.png'
import thirdImage from '../../../images/section-sto-overview/3.png'

const StoCategories = ({ text }) => (
  <section className="section section_categories">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">
          {text.title_black}
          <span className="title title_section _orange">
            {text.title_orange}
          </span>
          <br />
          {text.title_black2}
          <span className="title title_section _orange">
            {text.title_orange2}
          </span>
        </h2>
      </div>
      <div className="wrapper_cards">
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={firstImage} />
            <h6 className="card__title">{text.title_categories}</h6>
            <p className="card__description">{text.descr_categories1}</p>
          </div>
        </div>
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={secondImage} />
            <h6 className="card__title">{text.title_categories2}</h6>
            <p className="card__description">{text.descr_categories2}</p>
          </div>
        </div>
        <div className="wrapper_card">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={thirdImage} />
            <h6 className="card__title">{text.title_categories3}</h6>
            <p className="card__description">{text.descr_categories3}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default StoCategories
