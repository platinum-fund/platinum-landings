import React from 'react'
import './section_token-to-moon.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'react-intl'

const TokenToTheMoon = () => (
  <TranslationProvider translations={translations}>
    <div className="section section_token-to-moon">
      <div className="wrapper_section-content">
        <a className="js-form-button button button_theme_main">
          <span>
            <FormattedHTMLMessage id="helpMyTokenNow" />
          </span>
        </a>
        <p className="c-txt-desc">
          <FormattedHTMLMessage id="bringMyTokenToThe" />
        </p>
      </div>
    </div>
  </TranslationProvider>
)

export default TokenToTheMoon
