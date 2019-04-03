import React from 'react'
import './section_roadmap.less'

const Roadmap = () => (
  <section className="section_how-it-work-stable-coin">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_main _white">Roadmap</h2>
        </div>
      </div>
      <div className="roadmap">
        <article className="roadmap__item">
          <div className="roadmap__data">April-May, 2019</div>
          <p className="roadmap__text">
            The release of a standard contract with USDQ backed with bitcoin
            assets. Creating the simplest landing site for monitoring of
            collateral and released assets. Listing of the tokens on the first
            exchanges.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">July-August, 2019</div>
          <p className="roadmap__text">
            Closed beta test of the loan interface. We give the first loans
            secured by your bitcoins in semi-automatic mode. Expansion of the
            list of exchanges for listing. Release of new USDQ tokens on the
            secondary market. Launch of JPYQ, KRWQ, CNYQ tokens. Loans will be
            processed manually.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">November-December, 2019</div>
          <p className="roadmap__text">
            The release of the first public beta. Automation of the loan
            process. Implementation of the voting system. The limited launch of
            predictor robots within the team of the project. The release of the
            managing token.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">January-February, 2020</div>
          <p className="roadmap__text">
            The release of the first public predictor robots. Start mining
            process.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">March-April, 2020</div>
          <p className="roadmap__text">
            Automation of the loan process of JPYQ, KRWQ, CNYQ tokens.
          </p>
        </article>
      </div>
    </div>
  </section>
)

export default Roadmap
