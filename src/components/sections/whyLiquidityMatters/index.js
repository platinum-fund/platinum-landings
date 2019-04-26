import React from 'react'
import './section_why-liquidity-matters.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'

const WhyLiquidityMatters = () => (
  <TranslationProvider translations={translations}>
    <div className="section section_why-liquidity-matters">
      <div className="wrapper_section-content">
        <div className="o-column">
          <h2 className="c-column-header">
            <FormattedHTMLMessage id="whyVolumeLiquidityMatters" />
          </h2>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="addYourTokenToThe" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="marketCapAndTradingVolume" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="decentTradingVolumeAttractsNew" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="classicVentureCapitalistsAndAngels" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="utilityIsAPrimaryFunction" />
          </p>
        </div>
        <div className="o-column">
          <h2 className="c-column-header">
            <FormattedHTMLMessage id="ourSolutionAlgorithmicTrading" />
          </h2>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="youWillGetBestPrice" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="weWillSaveYourMoney" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="refinedAndSolidLiquidityStrategy" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="anyExchangesNoAdditionalFee" />
          </p>
          <p className="c-text-fragment">
            <FormattedHTMLMessage id="transparentFundsForMarketmakingUnder" />
          </p>
        </div>
      </div>
    </div>
  </TranslationProvider>
)

export default WhyLiquidityMatters
