import React from 'react'
import './fundraising.less'
import firstImage from '../../../images/section-fundraising/map.png'
import secondImage from '../../../images/section-fundraising/people.png'
import thirdImage from '../../../images/section-fundraising/woman.png'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const Fundraising = () => (
  <TranslationProvider translations={translations}>
    <section classname="section-fundraising">
      <div classname="wrapper_shrink">
        <div classname="headline">
          <h2 classname="title title_type_section">
            <FormattedHTMLMessage id="fundraisingAndRoadshows" />
          </h2>
          <h4 classname="title title_type_subtitle">
            <FormattedHTMLMessage id="wePromoteSelectedProjectsDirectly" />
          </h4>
        </div>
        <div classname="wrapper_cards">
          <div classname="wrapper_card">
            <img classname="card_image" src={firstImage} />
            <p classname="card_description">
              <FormattedHTMLMessage id="hugeNetworkOfInstitutionalInvestors" />
            </p>
          </div>
          <div classname="wrapper_card">
            <img classname="card_image" src={secondImage} />
            <p classname="card_description">
              <FormattedHTMLMessage id="40" />
            </p>
          </div>
          <div classname="wrapper_card">
            <img classname="card_image" src={thirdImage} />
            <p classname="card_description">
              <FormattedHTMLMessage id="200m" />
            </p>
          </div>
        </div>
        <div classname="headline">
          <h6 classname="card_description">
            <FormattedHTMLMessage id="doYouWantToReceive" />
          </h6>
          <div classname="wrapper_buttons">
            <button classname="js-form-button button button_theme_main">
              Get an invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Fundraising
