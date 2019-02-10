import React from 'react'
import './funding-type.less'
import vcImage from '../../../images/funding-type/vc.png'
import ipoImage from '../../../images/funding-type/ipo.png'
import icoImage from '../../../images/funding-type/ico.png'
import stoImage from '../../../images/funding-type/sto.png'

const FundingType = ({ buttons }) => (
  <section className="section_funding-type">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">
          Comparing to another funding type
        </h2>
      </div>
      <div className="wrapper_images">
        <div className="wrapper_image">
          <img className="card_image" src={vcImage} />
          <div className="card_text">VC</div>
        </div>
        <div className="wrapper_image">
          <img className="card_image" src={ipoImage} />
          <div className="card_text">IPO</div>
        </div>
        <div className="wrapper_image">
          <img className="card_image" src={icoImage} />
          <div className="card_text">ICO</div>
        </div>

        <div className="wrapper_image">
          <img className="card_image" src={stoImage} />
          <div className="card_text">STO</div>
        </div>
      </div>
      <div className="headline">
        <h2 className="title title_type_section">GET YOU</h2>
        <h2 className="title title_type_section _orange">FREE CONSULTATION</h2>
        <h2 className="title title_type_section">AND</h2>
        <h2 className="title title_type_section _orange">PROJECT REVIEW</h2>
      </div>
      <div className="wrapper_buttons">
        <button className={buttons[0].className}>Get the price</button>
      </div>
    </div>
  </section>
)

export default FundingType
