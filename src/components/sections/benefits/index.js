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
    <section classname="section-benefits" id="cases">
      <div classname="wrapper_shrink">
        <div classname="headline">
          <h2 classname="title title_type_section">
            <FormattedHTMLMessage id="platform" />
          </h2>
          <h2 classname="title title_type_section _orange">
            <FormattedHTMLMessage id="features" />
          </h2>
          <h2 classname="title title_type_section">
            <FormattedHTMLMessage id="and" />
          </h2>
          <h2 classname="title title_type_section _orange">
            <FormattedHTMLMessage id="benefits" />
          </h2>
          <h4 classname="title title_type_subtitle">
            <FormattedHTMLMessage id="fullyCastomisableSolution" />
          </h4>
        </div>
        <div classname="wrapper_cards">
          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={eyeImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="userfriendly" />
            </h6>
          </div>
          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={coinImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="receivePaymentsIn" />
            </h6>
          </div>
          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={cardsImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="receivePaymentsVia" />
            </h6>
          </div>
          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={zoomImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="preciseAndDetailed" />
            </h6>
          </div>
          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={clockImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="fast" />
            </h6>
          </div>

          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={workerImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="integratedSystemFor" />
            </h6>
          </div>

          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={mobileImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="dividendStructureIssuance" />
            </h6>
          </div>

          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={lockImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="topNotch" />
            </h6>
          </div>

          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={manImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="tokenSale" />
            </h6>
          </div>

          <div classname="card card_theme_light card_type_column">
            <img classname="card__image" src={grafImage} />
            <h6 classname="card__description-big">
              <FormattedHTMLMessage id="sto" />
            </h6>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Benefits
