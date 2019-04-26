import React from 'react'
import './section_details-ieo.less'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import content from './content'

const Details = () => (
  <TranslationProvider translations={translations}>
    <section className="section_details-ieo" id="section-details-ieo">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="title" />
          </h2>
        </div>
        <div className="wrapper_cards">
          {content.features.map((feature, i) => (
            <div className="card card_theme_light card_type_column" key={i}>
              <img className="card__image" src={feature.image} />
              <h6 className="card__title">
                <FormattedHTMLMessage id={feature.title} />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage id={feature.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Details
