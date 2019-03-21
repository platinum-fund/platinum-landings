import React from 'react'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import './section_sto-advantages.less'

const StoAdvantagesPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_sto-advantages" id="advantages">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage
              id="securityTokens"
              defaultMessage={'securityTokens'}
            />
          </h2>
          <h2 className="title title_type_section _orange">
            <FormattedHTMLMessage
              id="theOnlyWay"
              defaultMessage={'theOnlyWay'}
            />
          </h2>
        </div>
        <div className="wrapper_cards flex _wrap">
          <div className="card card_theme_tall card_theme_dark">
            <div className="card__row">
              <h6 className="card__main-title">
                <FormattedHTMLMessage
                  id="forCompanies"
                  defaultMessage={'forCompanies'}
                />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="whyShouldYouCreateA"
                  defaultMessage={'whyShouldYouCreateA'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/liquidity.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="liquidity"
                    defaultMessage={'liquidity'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="securityTokensProvideASubstantial"
                  defaultMessage={'securityTokensProvideASubstantial'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/efficiency.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="effectiveness"
                    defaultMessage={'effectiveness'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="attractInvestmentsInCryptocurrencyAnd"
                  defaultMessage={'attractInvestmentsInCryptocurrencyAnd'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/transparency.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="transparency"
                    defaultMessage={'transparency'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="eachSecurityTokenProducerIs"
                  defaultMessage={'eachSecurityTokenProducerIs'}
                />
              </p>
            </div>
          </div>
          <div className="card card_theme_tall card_theme_light">
            <div className="card__row">
              <h6 className="card__main-title">
                <FormattedHTMLMessage
                  id="forInvestors"
                  defaultMessage={'forInvestors'}
                />
              </h6>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="whyShouldYouInvestIn"
                  defaultMessage={'whyShouldYouInvestIn'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/lower-fees.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="reducedCommissions"
                    defaultMessage={'reducedCommissions'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="traditionalFinancialSystemsHaveMany"
                  defaultMessage={'traditionalFinancialSystemsHaveMany'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/markets.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="unstoppableMarket"
                    defaultMessage={'unstoppableMarket'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="blockchainHasNoHolidaysDays"
                  defaultMessage={'blockchainHasNoHolidaysDays'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/crypto.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="automatedCryptocurrencyFundraising"
                    defaultMessage={'automatedCryptocurrencyFundraising'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="presentMoneyInCryptocurrencyAnd"
                  defaultMessage={'presentMoneyInCryptocurrencyAnd'}
                />
              </p>
            </div>
            <div className="card__row">
              <div className="card__title">
                <img
                  className="card__title-image"
                  src={require('src/images/section-sto-advantages/liquidity.svg')}
                />
                <h6>
                  <FormattedHTMLMessage
                    id="liquidityForPrivateSecurities"
                    defaultMessage={'liquidityForPrivateSecurities'}
                  />
                </h6>
              </div>
              <p className="card__description">
                <FormattedHTMLMessage
                  id="securityTokensProvideASubstantial"
                  defaultMessage={'securityTokensProvideASubstantial'}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default StoAdvantagesPure
