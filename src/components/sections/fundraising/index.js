import React from 'react'
import './fundraising.less'
import firstImage from '../../../images/section-fundraising/map.png'
import secondImage from '../../../images/section-fundraising/people.png'
import thirdImage from '../../../images/section-fundraising/woman.png'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import LazyImage from 'src/components/lazyImage'

const Fundraising = () => (
  <TranslationProvider translations={translations}>
    <section className="section-fundraising">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="fundraisingAndRoadshows" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="wePromoteSelectedProjectsDirectly" />
          </h4>
        </div>
        <div className="wrapper_cards">
          <div className="wrapper_card">
            <LazyImage className="card_image" src={firstImage} />
            <p className="card_description">
              <FormattedHTMLMessage id="hugeNetworkOfInstitutionalInvestors" />
            </p>
          </div>
          <div className="wrapper_card">
            <LazyImage className="card_image" src={secondImage} />
            <p className="card_description">
              <span className="card_description_orange">
                <FormattedHTMLMessage id="40main" />
              </span>
              <FormattedHTMLMessage id="40second" />
            </p>
          </div>
          <div className="wrapper_card">
            <LazyImage className="card_image" src={thirdImage} />
            <p className="card_description">
              <span className="card_description_orange">
                <FormattedHTMLMessage id="200m1" />
              </span>
              <FormattedHTMLMessage id="200m2" />
            </p>
          </div>
        </div>
        <div className="headline">
          <h6 className="card_description">
            <FormattedHTMLMessage id="doYouWantToReceive" />
          </h6>
          <div className="wrapper_buttons">
            <button className="js-form-button button button_theme_main">
              <FormattedHTMLMessage id="getAnInvitation" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Fundraising
