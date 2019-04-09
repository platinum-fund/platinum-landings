import React from 'react'

import './section_listing-prices.less'

const ListingPricesPure = () => (
  <section className="section section_listing-prices">
    <div className="wrapper_section-content">
      <header>
        <h2 className="title title_type_section">PRICES</h2>
      </header>
      <div className="listing-prices">
        <div className="listing-prices__item">
          <h6 className="listing-prices__header" data-i18n="consultation">
            CONSULTATION
          </h6>
          <div className="listing-prices__box">
            <h6 className="listing-prices__price" data-i18n="free">
              FREE
            </h6>
          </div>
          <div className="listing-prices__text-box">
            <p
              className="listing-prices__text"
              data-i18n="freeConsultationText"
            >
              Free consultation with our listing experts
            </p>
          </div>
          <a
            className="js-form-button
                  button
                  button_theme_light-orange-output
                  "
            data-i18n="getStarted"
            id="button_940"
          >
            GET STARTED
          </a>
        </div>
        <div className="listing-prices__item listing-prices__item-highlighted">
          <h6 className="listing-prices__header">EXCHANGES</h6>
          <div className="listing-prices__box">
            <p class="listing-prices__currency" data-i18n="btcFrom">
              BTC
              <br />
              from
            </p>
            <h6 class="listing-prices__price">1</h6>
            <p class="listing-prices__amount" data-i18n="once">
              /once
            </p>
          </div>
          <div className="listing-prices__text-box">
            <p class="listing-prices__text" data-i18n="exchangesItem1Text">
              Variety of exchanges to choose from
            </p>
            <p class="listing-prices__text" data-i18n="exchangesItem2Text">
              Complex expertise of your project with the list of exchanges
              suitable for it
            </p>
            <p class="listing-prices__text" data-i18n="exchangesItem3Text">
              «Priority listing» to save your time
            </p>
            <p class="listing-prices__text" data-i18n="exchangesItem4Text">
              Care for you and your business
            </p>
          </div>
          <a
            className="js-form-button
            button
            button_theme_light-orange
            "
            data-i18n="getStarted"
            id="button_950"
          >
            GET STARTED
          </a>
        </div>
        <div className="listing-prices__item">
          <h6 className="listing-prices__header">wallets</h6>
          <div className="listing-prices__box">
            <p class="listing-prices__currency" data-i18n="btcFrom">
              BTC
              <br />
              from
            </p>
            <h6 class="listing-prices__price">0.5</h6>
            <p class="listing-prices__amount" data-i18n="once">
              /once
            </p>
          </div>
          <div class="listing-prices__text-box">
            <p class="listing-prices__text" data-i18n="walletsItem1Text">
              Integration into a variety of wallets
            </p>
            <p class="listing-prices__text" data-i18n="walletsItem2Text">
              Wallets with their own mobile apps user-friendly for your
              investors
            </p>
          </div>
          <a
            className="js-form-button
            button
            button_theme_light-orange-output
            "
            data-i18n="getStarted"
            id="button_960"
          >
            GET STARTED
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default ListingPricesPure
