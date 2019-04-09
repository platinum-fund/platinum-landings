import React from 'react'

import './section_listing-extra.less'

const columns = [
  {
    title: 'PAYMENTS ACCEPT SYSTEM',
    description: 'PAYMENT SYSTEM FOR INVESTORS'
  },
  {
    title: 'HOW TO LAUNCH ICO',
    description: 'TRAINING AND ADVICES'
  },
  {
    title: 'MORE THAN $1,000,000',
    description: 'OUR OWN CRYPTOCURRENCY INVESTMENT FUND'
  }
]

const ListingExtraPure = () => (
  <section className="section section_listing-extra">
    <div className="wrapper_section-content">
      <header className="section_listing-extra__header">
        <h2 className="title title_type_section">EXTRA</h2>
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
        We’ll not only help you to get listed on exchanges, but will also
        provide a full range of other useful services to help you to succeed and
        achieve an extensive growth of your business!
      </p>
      <a
        className="button js-form-button button_theme_light-orange-output"
        id="button_930"
      >
        GET FREE CONSULTATION NOW
      </a>
    </div>
  </section>
)

export default ListingExtraPure
