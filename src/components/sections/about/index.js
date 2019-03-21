import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
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
            <FormattedHTMLMessage id="about" />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage id="platinum" />
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
              <FormattedHTMLMessage id="fullCycleAgency" />
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
              <FormattedHTMLMessage id="fundraisingAndRoadshows" />
            </p>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default About
