import React from 'react'
import ContactForm from 'src/includes/ContactForm/ContactForm'
import { contactFormConfigDefault } from 'src/includes/ContactForm/dependencies'

const config = {
  ...contactFormConfigDefault,
  buttonsClassName: 'js-form-button',
  apiUrl: 'https://api-dev.platinum.fund/v1/inbox',
  landingName: 'common'
}

const ContactFormWrapper = props => (
  <div id="contact-form">
    <ContactForm config={{ ...config, ...props.config }} />
  </div>
)

export default ContactFormWrapper
