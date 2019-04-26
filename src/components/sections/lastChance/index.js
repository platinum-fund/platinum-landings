import React from 'react'
import './section_last-chance.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'

const LastChance = props => (
  <TranslationProvider translations={translations}>
    <section className="section_last-chance">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_main">
            <FormattedHTMLMessage id="hugeFunds" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="dontWasteAChance" />
          </h4>
        </div>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            <FormattedHTMLMessage id="cREATESECURITYTOKENNOW" />
          </button>
          <button className="js-form-button button button_theme_light-black">
            <FormattedHTMLMessage id="gETFREECONSULTATION" />
          </button>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default LastChance
