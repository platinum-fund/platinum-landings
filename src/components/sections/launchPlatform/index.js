import React from 'react'
import './launch-platform.less'
import image from '../../../images/section-launch-platform/mac.png'

const LaunchPlatform = ({ buttons }) => (
  <section className="section launch-platform">
    <div className="wrapper_shrink">
      <div className="wrapper_cards">
        <div className="card_contain">
          <h2 className="title title_type_section">
            SECURED STO LAUNCH PLATFORM
          </h2>
          <p className="card__description">
            Accept Payments in{' '}
            <span class="card__description _orange">CRYPTOCURRENCY</span>,{' '}
            <span className="card__description _orange">FIAT </span>
            or via{' '}
            <span className="card__description _orange">BANK TRANSFER</span>
          </p>
          <p className="section_description">
            STO Platform allows to easily accept crypto from investors, manage
            STO stages and marketing campaigns, process KYC/AML
          </p>
          <div className="wrapper_buttons" id="cases">
            <button className={buttons[0].className}>Get platform demo</button>
          </div>
        </div>
        <div className="wrapper_card">
          <img className="card_image" src={image} />
        </div>
      </div>
    </div>
  </section>
)

export default LaunchPlatform
