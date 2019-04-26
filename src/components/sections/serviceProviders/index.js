import React from 'react'
import './section_service-providers.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'
import LazyImage from 'src/components/lazyImage'

const ServiceProviders = props => (
  <TranslationProvider translations={translations}>
    <section className="section_service-providers">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="service" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="doYouProvideServices" />
          </h4>
        </div>
        <div className="service-providers">
          <LazyImage
            className="image"
            src={require('src/images/section-service-providers/service-providers.png')}
          />
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default ServiceProviders
