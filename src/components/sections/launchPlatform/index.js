import React from 'react'
import './launch-platform.less'
import image from '../../../images/section-launch-platform/mac.png'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const LaunchPlatform = () => (
  <TranslationProvider translations={translations}>
    <section className="section launch-platform">
      <div className="wrapper_shrink">
        <div className="wrapper_cards">
          <div className="card_contain">
            <h2 className="title title_type_section">
              <FormattedHTMLMessage id="securedStoLaunchPlatform" />
            </h2>
            <p className="card__description">
              <FormattedHTMLMessage id="acceptPaymentsIn" />
            </p>
            <p className="section_description">
              <FormattedHTMLMessage id="stoPlatformAllowsToEasily" />
            </p>
            <div className="wrapper_buttons" id="cases">
              <button className="js-form-button button button_theme_main">
                <FormattedHTMLMessage id="getPlatformDemo" />
              </button>
            </div>
          </div>
          <div className="wrapper_image">
            <img className="card_image" src={image} />
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default LaunchPlatform
