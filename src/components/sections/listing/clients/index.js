import React from 'react'
import './section_our-clients.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'
import graphImg from 'src/images/section-listing-clients/graph.svg'
import content from './content'
import LazyImage from 'src/components/lazyImage'

const OurClientsPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_our-clients">
      <div className="section_our-clients__container">
        <header>
          <h2 className="title title_type_section-attention">
            <FormattedHTMLMessage id="ourClients" />
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
                          <div className="listing-clients__title">
                            {client.alt}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  {i == 1 && (
                    <div className="listing-clients__item">
                      <div className="listing-clients__plus">
                        <FormattedHTMLMessage id="ourClientsMore" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="listing-image-block">
            <LazyImage
              className="listing-image-block__image"
              src={graphImg}
              alt="The percentage of hit and sales of our customers on the top
              exchanges"
            />
            <p className="listing-image-block__description">
              <FormattedHTMLMessage id="ourClientsDescription" />
            </p>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default OurClientsPure
