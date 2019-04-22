import React from 'react'
import './section_listing-prices.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

const ListingPricesPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_listing-prices">
      <div className="wrapper_section-content">
        <header>
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="prices" />
          </h2>
        </header>
        <div className="listing-prices">
          <div className="listing-prices__item">
            <h6 className="listing-prices__header">
              <FormattedHTMLMessage id="consultation" />
            </h6>
            <div className="listing-prices__box">
              <h6 className="listing-prices__price">
                <FormattedHTMLMessage id="free" />
              </h6>
            </div>
            <div className="listing-prices__text-box">
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="freeConsultationText" />
              </p>
            </div>
            <a
              className="js-form-button
                    button
                    button_theme_light-orange-output"
              id="button_940"
            >
              <FormattedHTMLMessage id="getStarted" />
            </a>
          </div>
          <div className="listing-prices__item listing-prices__item-highlighted">
            <h6 className="listing-prices__header">
              <FormattedHTMLMessage id="exchanges" />
            </h6>
            <div className="listing-prices__box">
              <p className="listing-prices__currency">
                <FormattedHTMLMessage id="btcFrom" />
              </p>
              <h6 className="listing-prices__price">1</h6>
              <p className="listing-prices__amount">
                <FormattedHTMLMessage id="once" />
              </p>
            </div>
            <div className="listing-prices__text-box">
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="exchangesItem1Text" />
              </p>
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="exchangesItem2Text" />
              </p>
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="exchangesItem3Text" />
              </p>
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="exchangesItem4Text" />
              </p>
            </div>
            <a
              className="js-form-button
              button
              button_theme_light-orange"
              id="button_950"
            >
              <FormattedHTMLMessage id="getStarted" />
            </a>
          </div>
          <div className="listing-prices__item">
            <h6 className="listing-prices__header">
              <FormattedHTMLMessage id="wallets" />
            </h6>
            <div className="listing-prices__box">
              <p className="listing-prices__currency">
                <FormattedHTMLMessage id="btcFrom" />
              </p>
              <h6 className="listing-prices__price">0.5</h6>
              <p className="listing-prices__amount">
                <FormattedHTMLMessage id="once" />
              </p>
            </div>
            <div className="listing-prices__text-box">
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="walletsItem1Text" />
              </p>
              <p className="listing-prices__text">
                <FormattedHTMLMessage id="walletsItem2Text" />
              </p>
            </div>
            <a
              className="js-form-button
              button
              button_theme_light-orange-output"
              id="button_960"
            >
              <FormattedHTMLMessage id="getStarted" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default ListingPricesPure
