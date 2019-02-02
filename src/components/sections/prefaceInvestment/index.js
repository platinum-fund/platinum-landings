import React from 'react'
import './section_preface-investment.less'
import ContactForm from 'src/components/contactForm'

const prefaceInvestment = () => (
  <section className="section_preface-investment">
    <div className="wrapper_shrink">
      <div className="header">
        <h2 className="title title_type_main-attention">
          Invest in the working ICO/STO
        </h2>
        <h2 className="title title_type_main">
          consulting and management business
        </h2>
        <h4 className="title title_type_subtitle">
          One of the biggest and profitable companies on the crypto market
        </h4>
      </div>
      <ContactForm />
      <div>Slider</div>
    </div>
  </section>
)

export default prefaceInvestment
