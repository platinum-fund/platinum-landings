import React from 'react'
import skull from './content/images/skull.png'
import TranslationProvider from 'src/components/translationProvider'
import { FormattedHTMLMessage } from 'react-intl'
import translations from './content/translations'

const SliderText = ({ firstPart, secondPart }) => (
  <TranslationProvider translations={translations}>
    <div className="o-slide-txt">
      <h2 className="o-slide-head">
        <FormattedHTMLMessage id="marketMakingAndLiquidity" />
      </h2>
      <h1 className="o-slide-main">
        <FormattedHTMLMessage id={firstPart} />
        <br />
        <FormattedHTMLMessage id={secondPart} />
        <img className="c-slide-skull" src={skull} alt="skull" />
      </h1>
      <div className="js-form-button button button_theme_main">
        <FormattedHTMLMessage id="getFreeMarketMaking" />
      </div>
    </div>
  </TranslationProvider>
)

export default SliderText
