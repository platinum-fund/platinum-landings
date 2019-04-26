import React from 'react'
import './section_securities-services.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'
import LazyImage from 'src/components/lazyImage'

const SecuritiesServicesPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_securities-services">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="platinumLTD" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="weCanProvideFullStackOf" />
          </h4>
        </div>
        <div className="wrapper_cards">
          <div className="card card_theme_light card_type_column">
            <h4 className="card__title">
              <FormattedHTMLMessage id="securityToken" />
            </h4>
            <p className="card__description">
              <FormattedHTMLMessage id="fastAndSafetlyCreation" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <h4 className="card__title">
              <FormattedHTMLMessage id="kYCAML" />
            </h4>
            <p className="card__description">
              <FormattedHTMLMessage id="identyServices" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <h4 className="card__title">
              <FormattedHTMLMessage id="fullLegal" />
            </h4>
            <p className="card__description">
              <FormattedHTMLMessage id="packageForSecurities" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <h4 className="card__title">
              <FormattedHTMLMessage id="globalCommunity" />
            </h4>
            <p className="card__description">
              <FormattedHTMLMessage id="accessForWorldwideMarketing" />
            </p>
          </div>
          <div className="card card_theme_light card_type_column">
            <h4 className="card__title">
              <FormattedHTMLMessage id="powerfullDashboard" />
            </h4>
            <p className="card__description">
              <FormattedHTMLMessage id="withBountyAndReferralSystem" />
            </p>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default SecuritiesServicesPure
