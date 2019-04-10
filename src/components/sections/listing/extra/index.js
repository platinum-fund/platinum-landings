import React from 'react'
import './section_listing-extra.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

const columns = [
  {
    title: <FormattedHTMLMessage id="paymentsAcceptSystemTitle" />,
    description: <FormattedHTMLMessage id="paymentSystemForInvestors" />
  },
  {
    title: <FormattedHTMLMessage id="howToLaunchIco" />,
    description: <FormattedHTMLMessage id="trainingAndAdvices" />
  },
  {
    title: <FormattedHTMLMessage id="moreThan1000000" />,
    description: (
      <FormattedHTMLMessage id="ourOwnCryptocurrencyInvestmentFund" />
    )
  }
]

const ListingExtraPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_listing-extra">
      <div className="wrapper_section-content">
        <header className="section_listing-extra__header">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="extra" />
          </h2>
        </header>
        <div className="listing-extra-columns">
          {columns.map((item, i) => {
            return (
              <div
                className="listing-extra-columns__column"
                key={`listingExtraCol${i}`}
              >
                <h2 className="listing-extra-columns__title">{item.title}</h2>
                <div className="listing-extra-columns__description">
                  {item.description}
                </div>
              </div>
            )
          })}
        </div>
        <p className="section_listing-extra__text">
          <FormattedHTMLMessage id="extraText" />
        </p>
        <a
          className="button js-form-button button_theme_light-orange-output"
          id="button_930"
        >
          <FormattedHTMLMessage id="btnGetFreeConsultationNow" />
        </a>
      </div>
    </section>
  </TranslationProvider>
)

export default ListingExtraPure
