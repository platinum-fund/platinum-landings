import React from 'react'
import './section_sto-standart.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const StoStandartPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_sto-standart">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage id="pls360" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="platinumSecurityTokenStandard" />
          </h4>
        </div>
        <h2 className="description-title">
          <FormattedHTMLMessage id="platinumElevatesTheTraditionalCapital" />
        </h2>
        <div className="description-wrapper">
          <p className="description-text">
            <FormattedHTMLMessage id="toMakeThisUpdatePossible" />
          </p>
          <p className="description-text">
            <FormattedHTMLMessage id="platinumSecurityTokenStandardOr" />
          </p>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default StoStandartPure
