import React from 'react'
import './section_our-clients.less'

import graphImg from 'src/images/section-listing-clients/graph.svg'

import content from './content'

const OurClientsPure = () => (
  <section className="section section_our-clients">
    <div className="section_our-clients__container">
      <header>
        <h2 class="title title_type_section-attention" data-i18n="ourClients">
          OUR CLIENTS
        </h2>
      </header>
      <div className="section_our-clients__content">
        <div className="listing-clients">
          {content.map((column, i) => {
            return (
              <div
                className="listing-clients__col"
                key={`listingClientCol${i}`}
              >
                {column.clients.map((client, ia) => {
                  return (
                    <div
                      className="listing-clients__item"
                      key={`listingClient${ia}`}
                    >
                      <div className="listing-clients__header">
                        <div className="listing-clients__icon">
                          <img src={client.src} alt={client.alt} />
                        </div>
                        <div class="listing-clients__title">{client.alt}</div>
                      </div>
                    </div>
                  )
                })}
                {i == 1 && (
                  <div class="listing-clients__item">
                    <div
                      class="listing-clients__plus"
                      data-i18n="ourClientsMore"
                    >
                      <span>+</span> More than <strong>100 pleased</strong>{' '}
                      clients
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="listing-image-block">
          <img
            className="listing-image-block__image"
            src={graphImg}
            alt="The percentage of hit and sales of our customers on the top
            exchanges"
          />
          <p
            className="listing-image-block__description"
            data-i18n="ourClientsDescription"
          >
            The percentage of hit and sales of our customers on the top
            exchanges.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default OurClientsPure
