import React from 'react'
import '../section_details.less'
import raiseCryptoImage from 'src/images/section-business-growth/raise-crypto.png'
import timeImage from 'src/images/section-business-growth/time.png'
import middlemanImage from 'src/images/section-business-growth/middleman.png'
import accessImage from 'src/images/section-business-growth/access.png'
import equityImage from 'src/images/section-business-growth/equity.png'
import Socials from 'src/components/socials'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'react-intl'
import LazyImage from 'src/components/lazyImage'

const Details = () => (
  <TranslationProvider translations={translations}>
    <section className="section_business-growth section_details">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section ">
            <FormattedHTMLMessage id="howTokenizationWill" />
          </h2>
        </div>
        <div className="wrapper_cards">
          <div className="card card_theme_light card_type_column">
            <LazyImage className="card__image" src={equityImage} />
            <h6 className="card__title">
              <FormattedHTMLMessage id="equityDevelopment" />
            </h6>
            <p className="card__description">
              <FormattedHTMLMessage id="platinumProvidesCompanies" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <LazyImage className="card__image" src={raiseCryptoImage} />
            <h6 className="card__title">
              <FormattedHTMLMessage id="СRyptocurrencyFundraising" />
            </h6>
            <p className="card__description">
              <FormattedHTMLMessage id="fundraisingInCrypto" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <LazyImage className="card__image" src={timeImage} />
            <h6 className="card__title">
              <FormattedHTMLMessage id="unstoppableMarket" />
            </h6>
            <p className="card__description">
              <FormattedHTMLMessage id="immediateAccessTo" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <LazyImage className="card__image" src={middlemanImage} />
            <h6 className="card__title">
              <FormattedHTMLMessage id="noIntermediaries" />
            </h6>
            <p className="card__description">
              <FormattedHTMLMessage id="platinumEliminatesTheMiddleman" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <LazyImage className="card__image" src={accessImage} />
            <h6 className="card__title">
              <FormattedHTMLMessage id="accessToBillionsOfUnbanked" />{' '}
            </h6>
            <p className="card__description">
              <FormattedHTMLMessage id="thereIsAHugeNumberOfUnbanked" />
            </p>
          </div>
        </div>
      </div>
      <Socials sidebar />
    </section>
  </TranslationProvider>
)

export default Details
