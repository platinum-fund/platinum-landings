import React from 'react'
import './section_sto-advantages.less'

const StoAdvantagesPure = () => (
  <section className="section_sto-advantages">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Security Tokens -</h2>
        <h2 className="title title_type_section _orange">the only way</h2>
      </div>
      <div className="wrapper_cards flex _wrap">
        <div className="card card_theme_tall card_theme_dark">
          <div className="card__row">
            <h6 className="card__main-title">For Companies</h6>
            <p className="card__description">
              WHY SHOULD YOU CREAE A SECURITY TOKEN?
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/liquidity.svg')}
              />
              <h6>Liquidity</h6>
            </div>
            <p className="card__description">
              Security tokens provide a substantial liquidity for private
              securities. Following certain ownership restrictions, which are
              already programmed, you are open to sell private securities to a
              global and wider pool of investors. Naturally, this green-light a
              liquid secondary market to grow.
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/efficiency.svg')}
              />
              <h6>Effectiveness</h6>
            </div>
            <p className="card__description">
              Attract investments in cryptocurrency, and let your contributor
              get the right allocation of securities. Ensure automatic payment
              of dividends, produce and distribute securities easily, and
              downgrade office operating expenses. Forget about bank transfers,
              delays up to 7 business days and manual calculations.
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/transparency.svg')}
              />
              <h6>Transparency</h6>
            </div>
            <p className="card__description">
              Each security token producer is eligible to handle: fundraising,
              capitalization table calculation, dividends and financial
              transactions in a transparent way, that is using Ethereum
              blockchain. Talking about smart contracts, security and software
              development, Platinum provides its own code, which you can analyze
              and examine.
            </p>
          </div>
        </div>
        <div className="card card_theme_tall card_theme_light">
          <div className="card__row">
            <h6 className="card__main-title">For Investors</h6>
            <p className="card__description">
              WHY SHOULD YOU INVEST IN SECURITY TOKEN?
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/lower-fees.svg')}
              />
              <h6>Reduced commissions</h6>
            </div>
            <p className="card__description">
              Traditional financial systems have many intermediaries and
              rent-seekers. Security Tokens, using blockchain technology and
              fully digital infrastructure, are able to shorten and even
              eliminate many of the typical fees associated with capital
              markets, adherence to requirements, and securities trading.
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/markets.svg')}
              />
              <h6>Unstoppable market</h6>
            </div>
            <p className="card__description">
              Blockchain has no holidays, days off or bank closing. Lastly, you
              obtain a permanent access to financial markets.
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/crypto.svg')}
              />
              <h6>Automated Cryptocurrency Fundraising</h6>
            </div>
            <p className="card__description">
              Present money in cryptocurrency and automatically receive the
              right distribution of securities. Forget about bank transfers,
              delays up to 7 business days and manual calculations.
            </p>
          </div>
          <div className="card__row">
            <div className="card__title">
              <img
                className="card__title-image"
                src={require('src/images/section-sto-advantages/liquidity.svg')}
              />
              <h6>Liquidity for Private Securities</h6>
            </div>
            <p className="card__description">
              Security tokens provide a substantial liquidity for private
              securities. Following certain ownership restrictions, which are
              already programmed, you are open to sell private securities to a
              global and wider pool of investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default StoAdvantagesPure
