import React from 'react'
import './about.less'
import firstImage from '../../../images/section-about/1.png'
import secondImage from '../../../images/section-about/2.png'
import thirdImage from '../../../images/section-about/3.png'

const About = () => (
  <section className="section_about">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">ABOUT</h2>
        <h2 className="title title_type_section _orange">PLATINUM</h2>
      </div>
      <div className="card card_type_column">
        <h6 className="card__title">Platinum is</h6>
        <p className="section_description">
          Platinum.fund is an international STO/IEO/ICO/POST ICO consulting,
          promotion and fundraising company with offices in Tokyo, London,
          Bangkok, Seoul, Singapore, Yangon, Colombo, Phnom Penh, Moscow, Minsk
          and Kiev. Over 200 specialists with 3 years experience in crypto and 7
          years in financial markets.
          <br />
          We have an extensive range of services and expertise in marketing and
          PR, management, consulting, programming, cyber-security, education,
          legal advisory and many more.
          <br />
          We can help to make your project a success story!
        </p>
      </div>

      <div className="wrapper_cards">
        <div className="wrapper_card">
          <img className="card_image" src={firstImage} />
          <p className="card_description">
            <span className="card_description_orange">Full cycle agency</span> -
            Platinum is your one-stop solution for Security Token Offerings,
            post-ICO/STO marketing and trading as well as Initial Exchange
            Offerings (IEO).
          </p>
        </div>
        <div className="wrapper_card">
          <img className="card_image" src={secondImage} />
          <p className="card_description">
            We are{' '}
            <span className="card_description_orange">
              the largest listing service
            </span>{' '}
            providers for the ICO, STO and IEO projects
          </p>
        </div>
        <div className="wrapper_card">
          <img className="card_image" src={thirdImage} />
          <p className="card_description">
            <span className="card_description_orange">
              Fundraising and roadshows
            </span>{' '}
            - we promote selected projects directly to our extensive global
            network of{' '}
            <span className="card_description_orange">
              private and institutional investors
            </span>
            , arrange private meetups, roadshows and investor pitching sessions{' '}
            <span className="card_description_orange">around the globe</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
