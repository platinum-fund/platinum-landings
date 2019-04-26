import React from 'react'
import Contacts from 'src/components/contacts'
import './section_contacts.less'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ContactsSection = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_contacts">
      <div className="wrapper_section-content">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="contactUsNow" />
          </h2>
        </div>
        <Contacts />
      </div>
    </section>
  </TranslationProvider>
)

export default ContactsSection
