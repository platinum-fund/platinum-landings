import React from 'react'
import './section_details-ieo.less'

const Details = () => (
  <section className="section_details-ieo" id="section-details-ieo">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section-attention">IEO</h2>
        <h2 className="title title_type_section">IN DETAIL</h2>
      </div>
      <div className="wrapper_cards">
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/secure.svg')}
          />
          <h6 className="card__title">Secure</h6>
          <p className="card__description">
            One of the issues with ICOs, is that scammer often use official
            telegram chats to impersonate team members and give fake addresses
            to contribute to. For an IEO, all transactions are carried out on
            the exchange’s IEO platform. T his will reduce the risk of sending
            your crypto to a wrong wallet address.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/simple.svg')}
          />
          <h6 className="card__title">Simple</h6>
          <p className="card__description">
            Are you tired of undergoing a different KYC process for every ICO
            project? With your verified KYC profile on exchange, you won’t need
            to undergo a separate KYC process for each IEO launched on the
            exchange.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/rocket.svg')}
          />
          <h6 className="card__title">Credibility</h6>
          <p className="card__description">
            Analysing the ICOs could be time-consuming and you need some
            specific skills and business acumens to assess an ICO. For IEO, The
            exchanges will ensure high quality of ICO projects to be listed on
            the IEO platform, or at least, the exchange will not allow any scam
            related ICO projects as the exchange will conduct its own due
            diligence on the projects prior listing on the IEO platform.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/accessibility.svg')}
          />
          <h6 className="card__title">Accessibility</h6>
          <p className="card__description">
            One of the issues with ICO is ICO is hard to be liquidated. With an
            IEO, you will have your invested tokens immediately in your exchange
            wallet, which allows you access to the wider crypto market. You will
            be able to immediately trade your tokens after it launches, as
            opposed to waiting for it to list. After IEO token lockup is also
            possible.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/gas-war.svg')}
          />
          <h6 className="card__title">Gas war</h6>
          <p className="card__description">
            Say no more to gas war! There’s no need to pay for gas when buying
            IEO tokens. So your purchases will be on a first-come, first served
            basis. You can also buy your IEO tokens in advance, depending on the
            IEO, and availability.
          </p>
        </div>
        <div className="card card_theme_light card_type_column">
          <img
            className="card__image"
            src={require('src/images/section-details-ieo/aggregation.svg')}
          />
          <h6 className="card__title">Aggregation</h6>
          <p className="card__description">
            Imagine you can access to a wide variety of blockchain projects just
            by browsing one platform. You would able to save time and make
            better and informed decisions by comparing all the blockchain
            projects on one platform.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Details
