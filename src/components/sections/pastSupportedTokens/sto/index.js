import React from 'react'
import './section_past-supported-tokens-sto.less'
import TokenList from 'src/components/tokenList'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const PastSupportedTokens = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_past-supported-tokens-sto">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title">
            <FormattedHTMLMessage id="pastSupported" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="platinumTeamIsSupportingAnd" />
          </h4>
        </header>
        <TokenList />
      </div>
    </section>
  </TranslationProvider>
)

export default PastSupportedTokens
