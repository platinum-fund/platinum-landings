import React from 'react'
import './section_share.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/share-now')
}

const ShareSectionPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_share" id="section_share">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="share_now" />
          </h2>
        </header>
        <share-now />
      </div>
    </section>
  </TranslationProvider>
)

export default ShareSectionPure
