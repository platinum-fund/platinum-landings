import React from 'react'
import '../section_preface.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/media-preview')
}

const PrefacePure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_preface">
      <div className="wrapper_shrink">
        <div className="headline">
          <h6 className="title title_type_second">
            <FormattedHTMLMessage id="weAreExpertsIn" />
          </h6>
          <h1 className="title title_type_main-attention">
            <FormattedHTMLMessage id="sECURITYTOKENOFFERING" />
          </h1>
          <h4 className="title title_type_second">
            <FormattedHTMLMessage id="launchYourSecurityTokenInMinutes" />
          </h4>
        </div>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            <FormattedHTMLMessage id="cREATESECURITYTOKENNOW" />
          </button>
          <button className="js-form-button button button_theme_light">
            <FormattedHTMLMessage id="gETFREECONSULTATION" />
          </button>
        </div>
        <div className="section_media-preview">
          <media-preview />
        </div>
        <div className="scroll-down">
          <p className="scroll-down__text">
            <FormattedHTMLMessage id="scrollToKnowMore" />
          </p>
          <img
            className="scroll-down__icon"
            src={require('src/images/section-preface/scroll-down.svg')}
          />
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default PrefacePure
