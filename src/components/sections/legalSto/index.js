import React from 'react'
import './legal-sto.less'
import icon from '../../../images/favicon.png'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const LegalSto = () => (
  <TranslationProvider translations={translations}>
    <section classname="section section_legal-sto" id="legal">
      <div classname="wrapper_shrink">
        <div classname="headline">
          <h2 classname="title title_type_section">
            <FormattedHTMLMessage id="legalForStoIsImportant" />
          </h2>
          <h4 classname="title title_type_subtitle">
            <FormattedHTMLMessage id="whenConductingAnStoMany" />
          </h4>
        </div>
        <div classname="wrapper_legalsto">
          <div classname="wrapper_list">
            <h4 classname="title-list">
              <FormattedHTMLMessage id="whatInfluencesTheChoiceOf" />
            </h4>
            <ul classname="list theme_diamond">
              <li classname="section__text">
                <FormattedHTMLMessage id="featuresOfYourProjectOr" />
              </li>
              <li classname="section__text">
                <FormattedHTMLMessage id="levelOfLegislativeConsolidationOf" />
              </li>
              <li classname="section__text">
                <FormattedHTMLMessage id="taxationRules" />
              </li>
              <li classname="section__text">
                <FormattedHTMLMessage id="rulesOnThePublicityOf" />
              </li>
              <li classname="section__text">
                <FormattedHTMLMessage id="theNeedToConductA" />
              </li>
            </ul>
          </div>
          <div classname="wrapper_card">
            <h6 classname="title_card">
              <FormattedHTMLMessage id="legalIsComplicatedWeWould" />
            </h6>
            <div classname="wrapper_buttons">
              <button classname="js-form-button button button_theme_main">
                Free consultation!
              </button>
            </div>
            <img classname="image_card" src={icon} />
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default LegalSto
