import React from 'react'
import './sto-overview.less'


const StoOverview = () => (
  <section className="section section_sto-overview" id="stooverview">
    <div className="wrapper_shrink">
      <div className="wrapper _content">
        <h2 className="title title_type_section">What is</h2>
        <h2 className="title title_type_section _orange">Security Token Offering</h2>
        <h2 className="title title_type_section">?</h2>
        <p className="section_description">A Security Token Offering (STO) is the cryptographic
          tokenization of your capital providing investors with a digital share of your company.</p>
        <p className="section_description">
          <span className="section_description--bold">
           Security Tokens
          </span>
          are defined as
          <span className="section_description--bold">
            financial securities
          </span>
          in accordance with the Howey test and empower investors with financial benefits such as:
        </p>
        <ul className="section__list theme_diamond">
          <li className="section__text">DIVIDENDS</li>
          <li className="section__text">EQUITY</li>
          <li className="section__text">PROFIT SHARING RIGHTS</li>
          <li className="section__text">BUY-BACK RIGHTS</li>
        </ul>
      </div>
    </div>
  </section>
)

export default StoOverview
