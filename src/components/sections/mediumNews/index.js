import React from 'react'
import './section_medium-news.less'
import MediumNews from 'src/components/mediumNews'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const MediumNewsSection = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_medium-news">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="ideasFromPlatinumExperts" />
          </h2>
        </header>
        <MediumNews />
      </div>
    </section>
  </TranslationProvider>
)

export default MediumNewsSection
