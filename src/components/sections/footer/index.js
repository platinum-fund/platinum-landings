import React from 'react'
import './section_footer.less'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const Footer = ({ noJapaneseAddress }) => (
  <TranslationProvider translations={translations}>
    <section className="section_footer" id="faq">
      <div className="wrapper_shrink">
        <div className="column">
          <p
            className="description"
            itemscope
            itemtype="https://schema.org/Organization"
          >
            <FormattedHTMLMessage id="fullAddress" />
            <span itemprop="name">
              <FormattedHTMLMessage id="companyName" />
            </span>
            <span itemprop="streetAddress">
              <FormattedHTMLMessage id="streetAddress" />
            </span>
            <span itemprop="addressRegion">
              <FormattedHTMLMessage id="addressRegion" />
            </span>
            <span itemprop="addressCountry">
              <FormattedHTMLMessage id="addressCountry" />
            </span>
          </p>
          <div className="card">
            <h6 className="card__title">
              <FormattedHTMLMessage id="branches" />
            </h6>
            <p className="card__subtitle">
              <FormattedHTMLMessage id="branchesSubtitle" />
            </p>
            <div className="card__description">
              <p className="card__address">
                <FormattedHTMLMessage id="Singapore" />
              </p>
              <p className="card__address">
                <FormattedHTMLMessage id="HongKong" />
              </p>
              <p className="card__address">
                <FormattedHTMLMessage id="SouthKorea" />
              </p>
              {!noJapaneseAddress && (
                <p className="card__address">
                  <FormattedHTMLMessage id="Japan" />
                </p>
              )}
              <p className="card__address">
                <FormattedHTMLMessage id="Thailand" />
              </p>
              <p className="card__address">
                <FormattedHTMLMessage id="Seychelles" />
              </p>
              <p className="card__address">
                <FormattedHTMLMessage id="Australia" />
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="copyright">
            <FormattedHTMLMessage id="copyright" />
          </p>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default Footer
