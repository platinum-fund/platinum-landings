import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './section_preface-nav.less'
import Socials from 'src/components/socials'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const PrefaceNav = () => (
  <TranslationProvider translations={translations}>
    <section className="section_preface-nav">
      <div className="wrapper_shrink">
        <div className="headline">
          <div className="headline _title">
            <h1 className="title title_type_main">
              <FormattedHTMLMessage
                id="fundraising"
                defaultMessage={'fundraising'}
              />
            </h1>
            <h4 className="title title_type_second">
              <FormattedHTMLMessage
                id="getYourProjectReviewedNow"
                defaultMessage={'getYourProjectReviewedNow'}
              />
            </h4>
          </div>
          <div className="wrapper_buttons">
            <button className="js-form-button button button_theme_main">
              Free consultation!
            </button>
          </div>
          <div className="wrapper_socials">
            <p className="title">
              <FormattedHTMLMessage id="followUs" defaultMessage={'followUs'} />
            </p>
            <Socials />
          </div>
          <div className="card card_theme_navigation">
            <AnchorLink className="card__item" href="#stooverview">
              <span>What is STO?</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#advantages">
              <span>Advantages of STO</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#legal">
              <span>Legal for STO</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#cases">
              <span>Cases</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#media">
              <span>Platinum Media</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#team">
              <span>Platinum Team</span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#faq">
              <span>FAQ</span>
            </AnchorLink>
          </div>
          <div className="scroll-down">
            <p className="scroll-down__text">
              <FormattedHTMLMessage
                id="scrollToKnowMore"
                defaultMessage={'scrollToKnowMore'}
              />
            </p>
            <img
              className="scroll-down__icon"
              src={require('src/images/section-preface/scroll-down.svg')}
            />
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default PrefaceNav
