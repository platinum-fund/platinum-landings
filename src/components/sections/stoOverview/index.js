import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './sto-overview.less'

const StoOverview = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_sto-overview" id="stooverview">
      <div className="wrapper_shrink">
        <div className="wrapper _content">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="whatIs" defaultMessage={'whatIs'} />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage
              id="securityTokenOffering"
              defaultMessage={'securityTokenOffering'}
            />
          </h2>
          <h2 className="title title_type_section">?</h2>
          <p className="section_description">
            <FormattedHTMLMessage
              id="aSecurityTokenOfferingSto"
              defaultMessage={'aSecurityTokenOfferingSto'}
            />
          </p>
          <p className="section_description">
            <FormattedHTMLMessage
              id="securityTokens"
              defaultMessage={'securityTokens'}
            />
          </p>
          <ul className="section__list theme_diamond">
            <li className="section__text">
              <FormattedHTMLMessage
                id="dividends"
                defaultMessage={'dividends'}
              />
            </li>
            <li className="section__text">
              <FormattedHTMLMessage id="equity" defaultMessage={'equity'} />
            </li>
            <li className="section__text">
              <FormattedHTMLMessage
                id="profitSharingRights"
                defaultMessage={'profitSharingRights'}
              />
            </li>
            <li className="section__text">
              <FormattedHTMLMessage
                id="buybackRights"
                defaultMessage={'buybackRights'}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default StoOverview
