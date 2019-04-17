import React from 'react'

const Socials = ({ contact }) => (
  <div className="contact__socials">
    {contact.socials.map((item, i) => (
      <div key={`social${i}`} className="contact__social">
        <header className="contact__social-header">
          <img
            className="contact__social-icon"
            src={require(`./content/images/socials/${item.name}.svg`)}
            alt="icon"
          />
          <p className="contact__social-title">{item.title}</p>
        </header>
        <div className="contact__qr-wrapper">
          <img className="contact__qr" src={item.qrImage} alt="qr code" />
        </div>
        <p className="contact__social-user">{item.user}</p>
      </div>
    ))}
  </div>
)

export default Socials
