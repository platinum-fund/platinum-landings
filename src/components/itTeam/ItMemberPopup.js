import React from 'react'
import Popup from 'src/components/popup'
import { FormattedHTMLMessage } from 'react-intl'
import Socials from './Socials'

const FullViewMember = ({ member }) => (
  <div className="it-member">
    <div className="it-member__photo-wrapper">
      <img className="it-member__photo" src={member.photo} alt="photo" />
    </div>
    <p className="it-member__name">{member.name}</p>
    <p className="it-member__position">
      <FormattedHTMLMessage id={member.position} />
    </p>
    <div className="it-member__socials">
      {Object.keys(member.contacts).map(key => (
        <Socials name={key} link={member.contacts[key]} key={key} />
      ))}
    </div>
    <p className="it-member__description">
      <FormattedHTMLMessage id={member.description} />
    </p>
  </div>
)

const ItMemberPopup = ({ member }) => {
  if (!member) {
    return <div />
  }

  return (
    <Popup
      popupId="fullViewOfItMember"
      content={<FullViewMember member={member} />}
    />
  )
}

export default ItMemberPopup
