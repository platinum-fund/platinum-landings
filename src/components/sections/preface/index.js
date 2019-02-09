import React from 'react'
import './section_preface.less'
import 'src/common.blocks/social/social-links.less'

const PrefacePure = ({ header, buttons }) => (
  <section className="section_preface">
    <div className="wrapper_shrink">
      <div className="headline">
        <h1 className="title title_type_main">
          {header.title_orange1}
          <span className="title title_type_main--white">
            {header.title_white1}
          </span>
          <br />
          <span className="title title_type_main--white">
            {header.title_white2}
          </span>
          <br />
          <span className="title title_type_main--white">
            {header.title_white3}
          </span>
          <span>{header.title_orange2}</span>
        </h1>
        <h4 className="title title_type_second">{header.title_little}</h4>
      </div>
      <div className="wrapper_buttons">
        <button className={buttons[0].className}>{header.button_orange}</button>
      </div>
      <div className="social-links">
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
          <a
            className="service"
            href="#"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            <img
              className="service__img"
              src={require('src/images/icons/social/line.svg')}
            />
          </a>
        </div>
      </div>
      <div className="card card_theme_navigation">
        <a className="card__item" href="#">
          <span>{header.nav_page1}</span>
        </a>
        <a
          className="card__item"
          href="https://seekingalpha.com/instablog/49582419-alena-kalionova/5251739-roller-coaster-rise-cryptocurrencies-2018-experts-explain"
          target="_blank"
        >
          <span>{header.nav_page2}</span>
        </a>
        <a
          className="card__item"
          href="https://hackernoon.com/security-tokens-in-the-us-regulations-and-exemptions-under-the-sec-laws-4640b5570948"
          target="_blank"
        >
          <span>{header.nav_page3}</span>
        </a>
        <a
          className="card__item"
          href="https://dailyhodl.com/2018/12/25/legal-aspects-of-sto-in-switzerland-how-to-issue-security-tokens-in-crypto-valley/"
          target="_blank"
        >
          <span>{header.nav_page4}</span>
        </a>
        <a
          className="card__item"
          href="https://www.tokendesk.io/the-roller-coaster-rise-of-cryptocurrencies-in-2018-experts-explain/"
          target="_blank"
        >
          <span>{header.nav_page5}</span>
        </a>
        <a
          className="card__item"
          href="https://www.coinspeaker.com/2019-crypto-regulation-stos/"
          target="_blank"
        >
          <span>{header.nav_page6}</span>
        </a>
        <a
          className="card__item"
          href="https://www.coinspeaker.com/2019-crypto-regulation-stos/"
          target="_blank"
        >
          <span>{header.nav_page7}</span>
        </a>
      </div>
      <div className="scroll-down">
        <p className="scroll-down__text">scroll to know more</p>
        <img
          className="scroll-down__icon"
          src={require('src/images/section-preface/scroll-down.svg')}
        />
      </div>
    </div>
  </section>
)

export default PrefacePure
