import React from 'react'
import LazyImage from 'src/components/lazyImage'
import content from './content'
import './contacts.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'

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

const Contacts = () => (
  <TranslationProvider translations={translations}>
    <div className="contacts">
      {content.map((contact, i) => (
        <div key={`contact${i}`} className="contact">
          <header className="contact__header">
            <div className="contact__photo-wrapper">
              <LazyImage
                className="contact__photo"
                src={contact.photo}
                alt="photo"
              />
            </div>
            <p className="contact__name">{contact.name}</p>
            <p className="contact__position">{contact.position}</p>
          </header>
          <Socials contact={contact} />
        </div>
      ))}
    </div>
  </TranslationProvider>
)

export default Contacts
