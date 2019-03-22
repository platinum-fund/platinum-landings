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
          <div className="roadmap__data">April, 2019</div>
          <p className="roadmap__text">
            The release of a standard contract with USDQ backed with bitcoin
            assets. Creating the simplest landing site for monitoring of
            collateral and released assets, describing the main concepts and
            ideas.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">April, 2019</div>
          <p className="roadmap__text">
            Listing on the first exchanges. The release of the first Y USDQ on
            the secondary market.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">May, 2019</div>
          <p className="roadmap__text">
            Beta start of loan interface. Closed test for those who enrolled in
            the white list. We give the first loans secured by your bitcoins in
            semi-automatic mode.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">July, 2019</div>
          <p className="roadmap__text">
            Automation of the loan process, the release of the first public
            beta.
          </p>
        </article>
        <article className="roadmap__item">
          <div className="roadmap__data">September, 2019</div>
          <p className="roadmap__text">
            The launch of predictor robots, full system launch.
          </p>
        </article>
      </div>
    </div>
  </section>
)

export default Roadmap
