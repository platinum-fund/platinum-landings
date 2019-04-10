import React from 'react'
import './section_listing-exchanges.less'
import logos from './content'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

const ListingExchangesPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_listing-exchanges">
      <div className="wrapper_section-content">
        <header>
          <h2 className="title title_type_section-attention">
            <FormattedHTMLMessage id="exchangesWeCanHelpWith" />
          </h2>
        </header>
        <div className="list-logos">
          {logos.map((item, i) => {
            return (
              <div key={`logo${i}`} className="list-logos__item">
                <img
                  className="list-logos__image"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            )
          })}
          <div className="list-logos__item list-logos__item_height_auto">
            <div className="list-logos__plus">
              <span>+</span> <strong>100</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)
export default ListingExchangesPure
