import React from 'react'
import './section_it-team.less'
import ItTeam from 'src/components/ItTeam'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ItTeamSection = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_it-team">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="itTeam" />
          </h2>
        </header>
        <ItTeam />
      </div>
    </section>
  </TranslationProvider>
)

export default ItTeamSection
