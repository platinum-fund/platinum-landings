import React from 'react'
import './launch-platform.less'
import image from '../../../images/section-launch-platform/mac.png'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const LaunchPlatform = () => (
  <TranslationProvider translations={translations}>
    <section classname="section launch-platform">
      <div classname="wrapper_shrink">
        <div classname="wrapper_cards">
          <div classname="card_contain">
            <h2 classname="title title_type_section">
              <FormattedHTMLMessage id="securedStoLaunchPlatform" />
            </h2>
            <p classname="card__description">
              <FormattedHTMLMessage id="acceptPaymentsIn" />
            </p>
            <p classname="section_description">
              <FormattedHTMLMessage id="stoPlatformAllowsToEasily" />
            </p>
            <div classname="wrapper_buttons" id="cases">
              <button classname="js-form-button button button_theme_main">
                Get platform demo
              </button>
            </div>
          </div>
          <div classname="wrapper_image">
            <img classname="card_image" src={image} />
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default LaunchPlatform
