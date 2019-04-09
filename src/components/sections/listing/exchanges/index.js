import React from 'react'
import './section_listing-exchanges.less'
import logos from './content'

const ListingExchangesPure = () => (
  <section className="section section_listing-exchanges">
    <div className="wrapper_section-content">
      <header>
        <h2 className="title title_type_section-attention">
          EXCHANGES WE CAN HELP WITH:
        </h2>
      </header>
      <div className="list-logos">
        {logos.map((item, i) => {
          return (
            <div key={`logo${i}`} className="list-logos__item">
              <img class="list-logos__image" src={item.src} alt={item.alt} />
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
)
export default ListingExchangesPure
