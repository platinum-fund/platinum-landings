import React from 'react'
import './section_team.less'
import WithLanguageContext from 'src/contexts/language/WithLanguageContext'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/project-team')
}

const TeamSectionPure = ({ language }) => (
  <TranslationProvider translations={translations}>
    <section className="section section_team" id="platinum-team">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="our" />
          </h2>
          <h2 className="title title_type_section-attention">
            <FormattedHTMLMessage id="team" />
          </h2>
        </header>
        <project-team language={language} />
      </div>
    </section>
  </TranslationProvider>
)

export default WithLanguageContext(TeamSectionPure)
