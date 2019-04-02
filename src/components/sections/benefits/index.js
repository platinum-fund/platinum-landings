import React from 'react'
import './benefits.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import eyeImage from '../../../images/section-benefit/1.png'
import coinImage from '../../../images/section-benefit/2.png'
import cardsImage from '../../../images/section-benefit/10.png'
import zoomImage from '../../../images/section-benefit/3.png'
import clockImage from '../../../images/section-benefit/5.png'
import workerImage from '../../../images/section-benefit/6.png'
import mobileImage from '../../../images/section-benefit/7.png'
import lockImage from '../../../images/section-benefit/4.png'
import manImage from '../../../images/section-benefit/8.png'
import grafImage from '../../../images/section-benefit/9.png'

const Benefits = () => (
  <TranslationProvider translations={translations}>
    <section className="section-benefits" id="cases">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="platform" />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage id="features" />
          </h2>
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="and" />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage id="benefits" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="fullyCastomisableSolution" />
          </h4>
        </div>
        <div className="wrapper_cards">
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={eyeImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="userfriendly1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="userfriendly2" />
              </span>
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={coinImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="receivePaymentsIn" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={cardsImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="receivePaymentsVia" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={zoomImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="preciseAndDetailed1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="preciseAndDetailed2" />
              </span>
              <FormattedHTMLMessage id="preciseAndDetailed3" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={clockImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="fastSystemDeployment" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={workerImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="integratedSystemFor1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="integratedSystemFor2" />
              </span>
              <FormattedHTMLMessage id="integratedSystemFor3" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={mobileImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="dividendStructureIssuance" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={lockImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="topNotch1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="topNotch2" />
              </span>
              <FormattedHTMLMessage id="topNotch3" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="topNotch4" />
              </span>
              <FormattedHTMLMessage id="topNotch5" />
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={manImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="tokenSale1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="tokenSale2" />
              </span>
            </h6>
          </div>
          <div className="card card_theme_light card_type_column">
            <img className="card__image" src={grafImage} />
            <h6 className="card__description-big">
              <FormattedHTMLMessage id="sto1" />
              <span className="card__description-big--orange">
                <FormattedHTMLMessage id="sto2" />
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Benefits
