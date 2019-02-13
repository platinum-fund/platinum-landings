import React from 'react'
import './services-list.less'

const ServicesList = ({ buttons }) => (
  <section className="section section_services-list">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">
          FULL LIST OF OUR
          <span className="title title_section _orange">SERVICES</span>
        </h2>
        <h2 className="title title_type_section">FOR STO</h2>
      </div>
      <p className="section_description">
        For the projects we select to work with we provide full range of
        services which any STO require
      </p>
      <div className="wrapper-box">
        <div className="box _service">
          <h4 className="box _title">INVESTMENT PACKAGE STO</h4>
          <div className="wrapper _content">
            <p className="box section_description">
              Full package of required documents in addition to formulation of
              financial model, development of smart contract, in accordance with
              KYC/AML/accreditation
            </p>
            <p className="box section_description">
              Development of the security token concept: Equity, Asset Reserve
              or Debt Token
            </p>
          </div>
          <h5 className="box price">from $85,000</h5>
          <div className="wrapper_buttons">
            <button className={buttons[1].className}>View more</button>
          </div>
        </div>
        <div className="box _service">
          <h4 className="box _title">TOKENIZATION & STO DASHBOARD</h4>
          <div className="wrapper _content">
            <p className="box section_description">
              Development of Token on the Ethereum Blockchain according to the
              tokenization model developed (else your Own Blockchain is
              necessary)
            </p>
            <p className="box section_description">
              Development of the technical platform for STO with KYC/AML and
              <br />
              Dividend Issuance
              <br />
              (White Label)
            </p>
          </div>
          <h5 className="box price">from $40,000</h5>
          <div className="wrapper_buttons">
            <button className={buttons[1].className}>View more</button>
          </div>
        </div>
        <div className="box _service">
          <h4 className="box _title">LEGAL FRAMEWORK & INCORPORATION</h4>
          <div className="wrapper _content">
            <p className="box section_description">
              Drafting a full pack of STO Legal Documentation: SAFT S, SAFT D,
              Terms & Conditions, Privacy Policy
            </p>
            <p className="box section_description">
              Formation and Incorporation of necessary entity structure for
              Security Token Issuer including SPV (Cayman, BVI, Estonia,
              <br />
              Swiss etc)
            </p>
          </div>
          <h5 className="box price">from $35,000</h5>
          <div className="wrapper_buttons">
            <button className={buttons[1].className}>View more</button>
          </div>
        </div>
        <div className="box _service">
          <h4 className="box _title">MARKETING FOR STO</h4>
          <div className="wrapper _content">
            <p className="box section_description">
              Community management - 24/7 community support services in public
              Telegram group of the project
            </p>
            <p className="box section_description">
              PR - Writing, editing and publishing of your press releases in all
              major crypto related medias by our team of professional
              copywriters
            </p>
          </div>
          <h5 className="box price">from $50,000</h5>
          <div className="wrapper_buttons">
            <button className={buttons[1].className}>View more</button>
          </div>
        </div>
        <div className="box _service">
          <h4 className="box _title">FUNDRAISING IN ASIA</h4>
          <div className="wrapper _content">
            <p className="box section_description">
              China - Fundraising, marketing, PR and roadshows
            </p>
            <p className="box section_description">
              Korea - IEO possibilities, cryptofunds, marketing, PR and
              roadshows
            </p>
            <p className="box section_description">
              Japan - Marketing, roadshows, partnerships
            </p>
          </div>
          <h5 className="box price">from $30,000</h5>
          <div className="wrapper_buttons">
            <button className={buttons[1].className}>View more</button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ServicesList
