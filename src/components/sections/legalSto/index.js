import React from 'react'
import './legal-sto.less'
import icon from '../../../images/favicon.png'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const LegalSto = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_legal-sto" id="legal">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="legalForStoIsImportant" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="whenConductingAnStoMany" />
          </h4>
        </div>
        <div className="wrapper_legalsto">
          <div className="wrapper_list">
            <h4 className="title-list">
              <FormattedHTMLMessage id="whatInfluencesTheChoiceOf" />
            </h4>
            <ul className="list theme_diamond">
              <li className="section__text">
                <FormattedHTMLMessage id="featuresOfYourProjectOr" />
              </li>
              <li className="section__text">
                <FormattedHTMLMessage id="levelOfLegislativeConsolidationOf" />
              </li>
              <li className="section__text">
                <FormattedHTMLMessage id="taxationRules" />
              </li>
              <li className="section__text">
                <FormattedHTMLMessage id="rulesOnThePublicityOf" />
              </li>
              <li className="section__text">
                <FormattedHTMLMessage id="theNeedToConductA" />
              </li>
            </ul>
          </div>
          <div className="wrapper_card">
            <h6 className="title_card">
              <FormattedHTMLMessage id="legalIsComplicatedWeWould" />
            </h6>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                <FormattedHTMLMessage id="freeConsultation" />
              </button>
            </div>
            <img className="image_card" src={icon} />
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default LegalSto
