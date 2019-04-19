import React from 'react'
import content from './content'
import socialIcons from './icons/socials'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const Socials = ({ name, link }) => (
  <a className="member__contact" href={link} target="_blank">
    <img className="member__contact-icon" src={socialIcons[name]} alt={name} />
  </a>
)

const ItTeam = props => (
  <TranslationProvider translations={translations}>
    <div className="it-team">
      {content.map((member, i) => (
        <div className="it-member" key={i}>
          <div className="it-member__photo-wrapper">
            <img className="it-member__photo" src={member.photo} alt="photo" />
          </div>
          <p className="it-member__name">{member.name}</p>
          <p className="it-member__description">
            <FormattedHTMLMessage id={member.description} />
          </p>
          <p className="it-member__position">
            <FormattedHTMLMessage id={member.position} />
          </p>
          <div className="it-member__socials">
            {Object.keys(member.contacts).map(key => (
              <Socials name={key} link={member.contacts[key]} key={key} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </TranslationProvider>
)

export default ItTeam
