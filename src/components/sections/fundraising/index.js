import React from 'react'
import './fundraising.less'
import firstImage from '../../../images/section-fundraising/map.png'
import secondImage from '../../../images/section-fundraising/people.png'
import thirdImage from '../../../images/section-fundraising/woman.png'

const Fundraising = ({ buttons }) => (
  <section className="section-fundraising">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Fundraising and roadshows</h2>
        <h4 className="title title_type_subtitle">
          We promote selected projects directly to our extensive global network
          of private and institutional investors, arrange private meetups,
          roadshows and investor pitching sessions around the globe
        </h4>
      </div>
      <div className="wrapper_cards">
        <div className="wrapper_card">
          <img className="card_image" src={firstImage} />
          <p className="card_description">
            Huge network of institutional investors and funds
          </p>
        </div>
        <div className="wrapper_card">
          <img className="card_image" src={secondImage} />
          <p className="card_description">
            <span className="card_description_orange">40+ </span>
            Investors Meetups
            <br />
            in 2017-2018
          </p>
        </div>
        <div className="wrapper_card">
          <img className="card_image" src={thirdImage} />
          <p className="card_description">
            <span className="card_description_orange">$200M+ </span>
            Funds Collected
          </p>
        </div>
      </div>
      <div className="headline">
        <h6 className="card_description">
          Do you want to receive an invitation
          <br />
          for the next meetup?
        </h6>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            Get an invitation
          </button>
        </div>
      </div>
    </div>
  </section>
)

export default Fundraising
