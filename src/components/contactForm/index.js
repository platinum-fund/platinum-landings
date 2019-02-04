import React from 'react'
import './contact-form.less'

const ContactForm = props => {
  const { label, placeholder, buttonText } = props

  return (
    <form className="contact-form">
      <label className="contact-form__label">{label}</label>
      <input
        className="contact-form__input"
        type="email"
        placeholder={placeholder}
        required
      />
      <button className="contact-form__button" type="submit">
        {buttonText}
      </button>
    </form>
  )
}

export default ContactForm
