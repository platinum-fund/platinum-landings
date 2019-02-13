import React from 'react'
import './fudraising.less'
import firstImage from '../../../images/section-fudraising/map.png'
import secondImage from '../../../images/section-fudraising/people.png'
import thirdImage from '../../../images/section-fudraising/woman.png'

const Fudraising = ({ buttons }) => (
  <section className="section_about">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Fundraising and roadshows</h2>
      </div>
      <div className="card card_type_column">
        <p className="section_description">
          We promote selected projects directly to our extensive global network
          of private and institutional investors, arrange private meetups,
          roadshows and investor pitching sessions around the globe
        </p>
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
          <button className={buttons[0].className}>Free consultation!</button>
        </div>
      </div>
    </div>
  </section>
)

export default Fudraising
