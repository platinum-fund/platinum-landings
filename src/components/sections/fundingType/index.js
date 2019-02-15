import React from 'react'
import './funding-type.less'
import vcImage from '../../../images/funding-type/vc.png'
import ipoImage from '../../../images/funding-type/ipo.png'
import icoImage from '../../../images/funding-type/ico.png'
import stoImage from '../../../images/funding-type/sto.png'

const FundingType = () => (
  <section className="section_funding-type">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">
          Comparing to another funding type
        </h2>
      </div>
      <div className="wrapper_images">
        <div className="wrapper_image">
          <img className="card_image" src={vcImage} alt="VC" />
          <div className="card_text">VC</div>
        </div>
        <div className="wrapper_image">
          <img className="card_image" src={ipoImage} alt="IPO" />
          <div className="card_text">IPO</div>
        </div>
        <div className="wrapper_image">
          <img className="card_image" src={icoImage} alt="ICO" />
          <div className="card_text">ICO</div>
        </div>

        <div className="wrapper_image">
          <img className="card_image" src={stoImage} alt="STO" />
          <div className="card_text">STO</div>
        </div>
      </div>
      <div className="headline">
        <h4 className="title title_type_second">GET YOU</h4>
        <h4 className="title title_type_second _orange">FREE CONSULTATION</h4>
        <h4 className="title title_type_second">AND</h4>
        <h4 className="title title_type_second _orange">PROJECT REVIEW</h4>
      </div>
      <div className="wrapper_buttons">
        <button className="js-form-button button button_theme_main">
          Get the price
        </button>
      </div>
    </div>
  </section>
)

export default FundingType
