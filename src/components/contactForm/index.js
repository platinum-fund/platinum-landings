import React from 'react'
import './contact-form.less'

const ContactForm = () => (
  <form>
    <label>Enter your email to get the prospectus</label>
    <input type="email" placeholder="Your email*" required />
    <button type="submit">Get information</button>
  </form>
)

export default ContactForm
