import React from 'react'
import '../section_action-attention.less'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const ActionAttention = () => (
  <TranslationProvider translations={translations}>
    <section className="section_action-attention">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="immediateLaunchOfSecurityToken" />
          </h2>
        </div>
        <p className="description">
          <FormattedHTMLMessage id="aFreeOpenStandardSecurity" />
        </p>
        <div className="wrapper_buttons">
          <button className="js-form-button button button_theme_light-white">
            <FormattedHTMLMessage id="launchSTO" />
          </button>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default ActionAttention
