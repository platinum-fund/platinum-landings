import React from 'react'
import './section_listing-successful.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'src/components/i18n'
import Socials from 'src/components/socials'

const ListingSuccessfulPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_listing-successful">
      <div className="wrapper_section-content">
        <header>
          <h2 className="title section_listing-successful__title">
            <FormattedHTMLMessage id="successfulListingOnExchangesWithin" />
          </h2>
        </header>
        <div className="list-text-accent__container">
          <div className="list-text-accent">
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem1Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem1Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem2Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem2Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem3Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem3Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem4Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem4Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem5Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem5Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem6Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem6Text" />
              </p>
            </div>
            <div className="list-text-accent__item">
              <h2 className="list-text-accent__title">
                <FormattedHTMLMessage id="successfullListItem7Title" />
              </h2>
              <p className="list-text-accent__text">
                <FormattedHTMLMessage id="successfullListItem7Text" />
              </p>
            </div>
          </div>
        </div>
        <div className="button button_theme_light-orange section_listing-successful__button">
          <a className="js-form-button" id="button_920">
            <FormattedHTMLMessage id="btnGetFreeConsultationNow" />
          </a>
        </div>
      </div>
      <Socials sidebar />
    </section>
  </TranslationProvider>
)

export default ListingSuccessfulPure
