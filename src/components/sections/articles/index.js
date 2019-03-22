import React from 'react'
import './section_articles.less'
import Articles from 'src/components/articles'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ArticlesSection = () => (
  <TranslationProvider translations={translations}>
    <section classname="section section_articles" id="media">
      <div classname="wrapper_shrink">
        <div classname="headline">
          <h2 classname="title title_type_section">
            <FormattedHTMLMessage id="findUsIn" />
          </h2>
          <h2 classname="title title_type_section _orange">
            <FormattedHTMLMessage id="media" />
          </h2>
        </div>
        <Articles />
      </div>
    </section>
  </TranslationProvider>
)

export default ArticlesSection
