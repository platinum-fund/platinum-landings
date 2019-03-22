import React from 'react'
import './services-list.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ServicesList = ({ buttons }) => (
  <TranslationProvider translations={translations}>
    <section className="section section_services-list">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="fullListOfOur" />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage id="services" />
          </h2>
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="forSto" />
          </h2>
        </div>
        <p className="section_description">
          <FormattedHTMLMessage id="forTheProjectsWeSelect" />
        </p>
        <div className="wrapper-box">
          <div className="box _service">
            <h4 className="box _title">
              <FormattedHTMLMessage id="investmentPackageSto" />
            </h4>
            <div className="wrapper _content">
              <p className="box section_description">
                <FormattedHTMLMessage id="fullPackageOfRequiredDocuments" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="developmentOfTheSecurityToken" />
              </p>
            </div>
            <h5 className="box price">
              <FormattedHTMLMessage id="from85000" />
            </h5>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                View more
              </button>
            </div>
          </div>
          <div className="box _service">
            <h4 className="box _title">
              <FormattedHTMLMessage id="tokenizationStoDashboard" />
            </h4>
            <div className="wrapper _content">
              <p className="box section_description">
                <FormattedHTMLMessage id="developmentOfTokenOnThe" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="developmentOfTheTechnicalPlatform" />
              </p>
            </div>
            <h5 className="box price">
              <FormattedHTMLMessage id="from40000" />
            </h5>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                View more
              </button>
            </div>
          </div>
          <div className="box _service">
            <h4 className="box _title">
              <FormattedHTMLMessage id="legalFrameworkIncorporation" />
            </h4>
            <div className="wrapper _content">
              <p className="box section_description">
                <FormattedHTMLMessage id="draftingAFullPackOf" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="formationAndIncorporationOfNecessary" />
              </p>
            </div>
            <h5 className="box price">
              <FormattedHTMLMessage id="from35000" />
            </h5>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                View more
              </button>
            </div>
          </div>
          <div className="box _service">
            <h4 className="box _title">
              <FormattedHTMLMessage id="marketingForSto" />
            </h4>
            <div className="wrapper _content">
              <p className="box section_description">
                <FormattedHTMLMessage id="communityManagement247Community" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="prWritingEditingAnd" />
              </p>
            </div>
            <h5 className="box price">
              <FormattedHTMLMessage id="from50000" />
            </h5>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                View more
              </button>
            </div>
          </div>
          <div className="box _service">
            <h4 className="box _title">
              <FormattedHTMLMessage id="fundraisingInAsia" />
            </h4>
            <div className="wrapper _content">
              <p className="box section_description">
                <FormattedHTMLMessage id="chinaFundraisingMarketingPr" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="koreaIeoPossibilitiesCryptofunds" />
              </p>
              <p className="box section_description">
                <FormattedHTMLMessage id="japanMarketingRoadshowsPartnerships" />
              </p>
            </div>
            <h5 className="box price">
              <FormattedHTMLMessage id="from30000" />
            </h5>
            <div className="wrapper_buttons">
              <button className="js-form-button button button_theme_main">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default ServicesList
