import React from 'react'
import './section_past-supported-tokens-sto.less'
import TokenList from 'src/components/tokenList'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const PastSupportedTokens = () => (
  <TranslationProvider translations={translations}>
    <section classname="section section_past-supported-tokens-sto">
      <div classname="wrapper_section-content">
        <header classname="headline">
          <h2 classname="title">
            <FormattedHTMLMessage id="pastSupported" />
          </h2>
          <h4 classname="title title_type_subtitle">
            <FormattedHTMLMessage id="platinumTeamIsSupportingAnd" />
          </h4>
        </header>
        <TokenList />
      </div>
    </section>
  </TranslationProvider>
)

export default PastSupportedTokens
