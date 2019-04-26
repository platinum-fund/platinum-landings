import React from 'react'
import { FormattedHTMLMessage } from 'src/components/i18n'
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
              <FormattedHTMLMessage id="mainTitle1" />
              <span className="title title_type_main _white">
                <FormattedHTMLMessage id="mainTitle2" />
              </span>
              <FormattedHTMLMessage id="mainTitle3" />
            </h1>
            <h4 className="title title_type_second">
              <FormattedHTMLMessage id="getYourProjectReviewedNow" />
            </h4>
          </div>
          <div className="wrapper_buttons">
            <button className="js-form-button button button_theme_main">
              <FormattedHTMLMessage id="freeConsultation" />
            </button>
          </div>
          <div className="wrapper_socials">
            <p className="title">
              <FormattedHTMLMessage id="followUs" />
            </p>
            <Socials />
          </div>
          <div className="card card_theme_navigation">
            <AnchorLink className="card__item" href="#stooverview">
              <span>
                <FormattedHTMLMessage id="whatIsSto" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#advantages">
              <span>
                <FormattedHTMLMessage id="advantagesOfSto" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#legal">
              <span>
                <FormattedHTMLMessage id="legalForSto" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#cases">
              <span>
                <FormattedHTMLMessage id="cases" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#media">
              <span>
                <FormattedHTMLMessage id="platinumMedia" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#team">
              <span>
                <FormattedHTMLMessage id="platinumTeam" />
              </span>
            </AnchorLink>
            <AnchorLink className="card__item" href="#faq">
              <span>
                <FormattedHTMLMessage id="faq" />
              </span>
            </AnchorLink>
          </div>
          <div className="scroll-down">
            <p className="scroll-down__text">
              <FormattedHTMLMessage id="scrollToKnowMore" />
            </p>
            <img
              className="scroll-down__icon"
              src={require('src/images/section-preface/scroll-down.svg')}
            />
          </div>
        </div>
      </div>
      <Socials sidebar />
    </section>
  </TranslationProvider>
)

export default PrefaceNav
