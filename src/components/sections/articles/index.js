import React from 'react'
import './section_articles.less'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/media-section')
}

const ArticlesSection = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_articles" id="media">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="findUsInMedia" />
          </h2>
        </div>
        <media-section />
      </div>
    </section>
  </TranslationProvider>
)

export default ArticlesSection
