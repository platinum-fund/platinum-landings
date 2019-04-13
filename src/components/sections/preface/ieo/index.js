import React from 'react'
import './section_preface-ieo.less'
import Socials from 'src/components/socials'
import SectionsNavbar from 'src/components/sectionsNavbar'
import content from './content'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const PrefacePure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_preface-ieo">
      <div className="wrapper_shrink">
        <header className="headline">
          <h1 className="title title_type_main">
            <FormattedHTMLMessage id="title" />
          </h1>
        </header>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            <FormattedHTMLMessage id="applyNow" />
          </button>
        </div>
        <div className="wrapper_bottom">
          <div className="wrapper_socials">
            <p className="title">
              <FormattedHTMLMessage id="followUs" />
            </p>
            <Socials />
          </div>
          <SectionsNavbar navigation={content.sectionsNavbar} />
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
