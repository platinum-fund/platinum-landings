import React from 'react'
import './section_create-security-token.less'
import RequestForm from 'src/components/requestForm'
import content from './content'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'react-intl'

const CreateSecurityToken = ({ config }) => (
  <TranslationProvider translations={translations}>
    <section className="section section_create-security-token">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section-big-attention">
            <FormattedHTMLMessage id="createYourSecurityToken" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="noMoreWait" />
          </h4>
        </header>
        <RequestForm
          content={content.contactForm}
          config={config.contactForm}
        />
      </div>
    </section>
  </TranslationProvider>
)

export default CreateSecurityToken
