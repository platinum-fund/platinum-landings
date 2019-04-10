import React from 'react'
import './section_market-making-prices.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'react-intl'

const MarketMakingPrices = () => (
  <TranslationProvider translations={translations}>
    <div className="section section_market-making-prices">
      <div className="wrapper_section-content">
        <h2 className="c-title">
          <FormattedHTMLMessage id="ourPrices" />
        </h2>
        <div className="o-prices">
          <div className="o-price-block o-price-block--inactive">
            <h3 className="c-pairs-top">
              <FormattedHTMLMessage id="freeConsultation" />
            </h3>
            <h4 className="c-price-free">
              <FormattedHTMLMessage id="free" />
            </h4>
            <div className="o-price-includes">
              <p className="c-price-include">
                <FormattedHTMLMessage id="freeConsultationAboutMarketMaking" />
              </p>
            </div>
            <p className="js-form-button button button_theme_light-black">
              <FormattedHTMLMessage id="getStarted" />
            </p>
          </div>
          <div className="o-price-block o-price-block--active">
            <h4 className="c-pairs-top">
              <FormattedHTMLMessage id="1Pair" />
            </h4>
            <div className="o-price-info">
              <h3 className="c-currency">
                <FormattedHTMLMessage id="btc" />
              </h3>
              <span className="c-price">2.5</span>
              <span className="c-pairs">
                <FormattedHTMLMessage id="1Pair" />
              </span>
            </div>
            <div className="o-price-includes">
              <p
                className="c-price-include"
                data-i18n="evaluationOfProjectAndSpecific"
              >
                <FormattedHTMLMessage id="evaluationOfProjectAndSpecific" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="supportOf1TradingPair" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="freeIntegrationOfNewExchanges" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="freeTransferOfServiceBetween" />
              </p>
            </div>
            <p className="js-form-button button button_theme_main">
              <FormattedHTMLMessage id="getStarted" />
            </p>
          </div>
          <div className="o-price-block o-price-block--inactive">
            <h4 className="c-pairs-top">
              <FormattedHTMLMessage id="3Pairs" />
            </h4>
            <div className="o-price-info">
              <h3 className="c-currency">
                <FormattedHTMLMessage id="btc" />
              </h3>
              <span className="c-price">3.5</span>
              <span className="c-pairs">
                <FormattedHTMLMessage id="3Pair" />
              </span>
            </div>
            <div className="o-price-includes">
              <p className="c-price-include">
                <FormattedHTMLMessage id="evaluationOfProjectAndSpecific" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="supportOf3TradingPair" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="allExtraPairsAreOnly" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="freeIntegrationOfNewExchanges" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="freeTransferOfServiceBetween" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="monthlyReports" />
              </p>
              <p className="c-price-include">
                <FormattedHTMLMessage id="personalAccountManager" />
              </p>
            </div>
            <p className="js-form-button button button_theme_light-black">
              <FormattedHTMLMessage id="getStarted" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </TranslationProvider>
)

export default MarketMakingPrices
