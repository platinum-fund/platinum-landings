import React from 'react'
import { FormattedHTMLMessage } from 'src/components/i18n'
import LazyImage from 'src/components/lazyImage'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './sto-categories.less'
import firstImage from '../../../images/section-sto-overview/1.png'
import secondImage from '../../../images/section-sto-overview/2.png'
import thirdImage from '../../../images/section-sto-overview/3.png'

const StoCategories = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_categories">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="theAre3MainCategories" />
          </h2>
        </div>
        <div className="wrapper_cards">
          <div className="wrapper_card">
            <div className="card card_theme_light card_type_column">
              <LazyImage className="card__image" src={firstImage} />
              <h6 className="card__title">
                <FormattedHTMLMessage id="equityTokens" />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage id="anStoWhereEachToken" />
              </p>
            </div>
          </div>
          <div className="wrapper_card">
            <div className="card card_theme_light card_type_column">
              <LazyImage className="card__image" src={secondImage} />
              <h6 className="card__title">
                <FormattedHTMLMessage id="reserveAssetsToken" />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage id="organizationsThatTradeInRealworld" />
              </p>
            </div>
          </div>
          <div className="wrapper_card">
            <div className="card card_theme_light card_type_column">
              <LazyImage className="card__image" src={thirdImage} />
              <h6 className="card__title">
                <FormattedHTMLMessage id="debtToken" />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage id="ratherThanTokenizingYourStock" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default StoCategories
