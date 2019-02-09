import React from 'react'
import './section_preface.less'

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
      <div className="card card_theme_media">
        <a
          className="card__item"
          href="http://markets.financialcontent.com/townhall/news/read/37494272"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/financial.png')}
          />
        </a>
        <a
          className="card__item"
          href="https://seekingalpha.com/instablog/49582419-alena-kalionova/5251739-roller-coaster-rise-cryptocurrencies-2018-experts-explain"
          target="_blank"
        >
          <img className="image" src={require('src/images/media/alpha.png')} />
        </a>
        <a
          className="card__item"
          href="https://hackernoon.com/security-tokens-in-the-us-regulations-and-exemptions-under-the-sec-laws-4640b5570948"
          target="_blank"
        >
          <img className="image" src={require('src/images/media/medium.png')} />
        </a>
        <a
          className="card__item"
          href="https://dailyhodl.com/2018/12/25/legal-aspects-of-sto-in-switzerland-how-to-issue-security-tokens-in-crypto-valley/"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/the-daily-hodl.png')}
          />
        </a>
        <a
          className="card__item"
          href="https://www.tokendesk.io/the-roller-coaster-rise-of-cryptocurrencies-in-2018-experts-explain/"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/tokendesk.png')}
          />
        </a>
        <a
          className="card__item"
          href="https://www.coinspeaker.com/2019-crypto-regulation-stos/"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/coinspeaker.png')}
          />
        </a>
        <a
          className="card__item"
          href="https://hellyellie.quora.com/Security-tokens-in-the-US-regulations-and-exemptions-under-the-SEC-laws"
          target="_blank"
        >
          <img className="image" src={require('src/images/media/quora.png')} />
        </a>
        <a
          className="card__item"
          href="https://www.livebitcoinnews.com/are-stos-the-step-in-the-right-direction-for-crypto/"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/bitcoin-news.png')}
          />
        </a>
        <a
          className="card__item"
          href="http://blockchaintoday.co.kr/news/viewpage.php?wr_id=1651//blockchaintoday.co.kr/news/viewpage.php?wr_id=1651"
          target="_blank"
        >
          <img
            className="image"
            src={require('src/images/media/blockhain-today.png')}
          />
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
