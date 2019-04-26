import React from 'react'
import { FormattedHTMLMessage } from 'src/components/i18n'
import LazyImage from 'src/components/lazyImage'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './funding-type.less'
import vcImage from '../../../images/funding-type/vc.png'
import ipoImage from '../../../images/funding-type/ipo.png'
import icoImage from '../../../images/funding-type/ico.png'
import stoImage from '../../../images/funding-type/sto.png'

const FundingType = () => (
  <TranslationProvider translations={translations}>
    <section className="section_funding-type">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="comparingToAnotherFundingType" />
          </h2>
        </div>
        <div className="wrapper_images">
          <div className="wrapper_image">
            <LazyImage className="card_image" src={vcImage} alt="VC" />
            <div className="card_text">
              <FormattedHTMLMessage id="vc" />
            </div>
          </div>
          <div className="wrapper_image">
            <LazyImage className="card_image" src={ipoImage} alt="IPO" />
            <div className="card_text">
              <FormattedHTMLMessage id="ipo" />
            </div>
          </div>
          <div className="wrapper_image">
            <LazyImage className="card_image" src={icoImage} alt="ICO" />
            <div className="card_text">
              <FormattedHTMLMessage id="ico" />
            </div>
          </div>

          <div className="wrapper_image">
            <LazyImage className="card_image" src={stoImage} alt="STO" />
            <div className="card_text">
              <FormattedHTMLMessage id="sto" />
            </div>
          </div>
        </div>
        <div className="headline">
          <h4 className="title title_type_second">
            <FormattedHTMLMessage id="getYourFreeConsultation" />
          </h4>
        </div>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_main">
            <FormattedHTMLMessage id="getThePrice" />
          </button>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default FundingType
