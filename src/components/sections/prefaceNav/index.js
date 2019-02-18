import React from 'react'
import './section_preface-nav.less'
import 'src/common.blocks/social/social-links.less'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const PrefaceNav = () => (
  <section className="section_preface-nav">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h1 className="title title_type_main">
            FUNDRAISING
            <span className="title title_type_main _white">
              FOR ENTERPRISES AND VENTURES THROUGH SECURITY TOKEN OFFERING
            </span>
            <span className="title title_type_main">STO</span>
          </h1>
          <h4 className="title title_type_second">
            Get your project reviewed now!
          </h4>
        </div>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            Free consultation!
          </button>
        </div>
        <div className="social_links">
          <p className="text">Follow us</p>
          <div className="wrapper_links">
            <a
              className="service"
              href="https://t.me/platinumfund"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/telegram.svg')}
              />
            </a>
            <a
              className="service"
              href="https://medium.com/@PlatinumFund"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/medium.svg')}
              />
            </a>
            <a
              className="service"
              href="https://www.facebook.com/FundPlatinum"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/facebook.svg')}
              />
            </a>
            <a
              className="service"
              href="https://twitter.com/FundPlatinum"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/twitter.svg')}
              />
            </a>
          </div>
        </div>
        <div className="card card_theme_navigation">
          <AnchorLink className="card__item" href="#stooverview">
            <span>What is STO?</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#advantages">
            <span>Advantages of STO</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#legal">
            <span>Legal for STO</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#cases">
            <span>Cases</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#media">
            <span>Platinum Media</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#team">
            <span>Platinum Team</span>
          </AnchorLink>
          <AnchorLink className="card__item" href="#faq">
            <span>FAQ</span>
          </AnchorLink>
        </div>
        <div className="scroll-down">
          <p className="scroll-down__text">scroll to know more</p>
          <img
            className="scroll-down__icon"
            src={require('src/images/section-preface/scroll-down.svg')}
          />
        </div>
      </div>
    </div>
  </section>
)

export default PrefaceNav