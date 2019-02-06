import React from 'react'
import './contact-form.less'

const ContactFormPure = props => {
  const {
    label,
    placeholder = 'Your email*',
    buttonText = 'Get information',
    buttonStatus,
    handleSubmit,
    handleChange
  } = props

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form__label">{label}</label>
      <input
        className="contact-form__input"
        type="email"
        placeholder={placeholder}
        required
        onChange={handleChange}
      />
      <button className="contact-form__button" type="submit">
        {buttonStatus || buttonText}
      </button>
    </form>
  )
}

export default ContactFormPure
