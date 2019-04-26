import React from 'react'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './about.less'
import firstImage from '../../../images/section-about/1.png'
import secondImage from '../../../images/section-about/2.png'
import thirdImage from '../../../images/section-about/3.png'

const About = () => (
  <TranslationProvider translations={translations}>
    <section className="section_about" id="section-about">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="aboutPlatinum" />
          </h2>
        </div>
        <div className="card card_type_column">
          <h6 className="card__title">
            <FormattedHTMLMessage id="platinumIs" />
          </h6>
          <p className="section_description">
            <FormattedHTMLMessage id="platinumfundIsAnInternationalStoieoicopost" />
          </p>
        </div>

        <div className="wrapper_cards">
          <div className="wrapper_card">
            <img className="card_image" src={firstImage} />
            <p className="card_description">
              <span className="card_description_orange">
                <FormattedHTMLMessage id="fullCycleAgency1" />
              </span>
              <FormattedHTMLMessage id="fullCycleAgency2" />
            </p>
          </div>
          <div className="wrapper_card">
            <img className="card_image" src={secondImage} />
            <p className="card_description">
              <FormattedHTMLMessage id="weAre" />
            </p>
          </div>
          <div className="wrapper_card">
            <img className="card_image" src={thirdImage} />
            <p className="card_description">
              <span className="card_description_orange">
                <FormattedHTMLMessage id="fundraisingAndRoadshows1" />
              </span>
              <FormattedHTMLMessage id="fundraisingAndRoadshows2" />
              <span className="card_description_orange">
                <FormattedHTMLMessage id="fundraisingAndRoadshows3" />
              </span>
              <FormattedHTMLMessage id="fundraisingAndRoadshows4" />
              <span className="card_description_orange">
                <FormattedHTMLMessage id="fundraisingAndRoadshows5" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default About
