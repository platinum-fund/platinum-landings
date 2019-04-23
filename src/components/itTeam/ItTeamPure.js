import React from 'react'
import content from './content'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ItMemberPopup from './ItMemberPopup'
import Socials from './Socials'
import './it-member.less'
import './it-team.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ItTeam = ({ sliderSettings, handleClick, shownMember }) => (
  <TranslationProvider translations={translations}>
    <div className="it-team">
      <Slider {...sliderSettings}>
        {content.map((member, i) => (
          <div className="it-member-wrapper" key={member.name}>
            <div className="it-member">
              <div className="it-member__photo-wrapper">
                <img
                  className="it-member__photo"
                  src={member.photo}
                  alt="photo"
                />
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
              <div
                className="it-member__details-button js-popup__button"
                onClick={e => handleClick(e, member)}
                data-popup-id="fullViewOfItMember"
              >
                read more
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <ItMemberPopup member={shownMember} />
    </div>
  </TranslationProvider>
)

export default ItTeam
