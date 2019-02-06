import React from 'react'
import './section_preface-investment.less'
import ContactForm from 'src/components/contactForm'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'
import Socials from 'src/components/socials'
import content from './content'

const prefaceInvestment = ({ config }) => (
  <section className="section section_preface-investment">
    <div className="wrapper_section-content">
      <div className="column_left">
        <header className="header">
          <h2 className="headline">
            <span className="title title_type_main-attention">
              Invest in the working ICO/STO
            </span>
            <span className="title title_type_main">
              consulting and management business
            </span>
          </h2>
          <h4 className="title title_type_subtitle">
            One of the biggest and profitable companies on the crypto market
          </h4>
        </header>
        <ContactForm
          label="Enter your email to get the prospectus"
          placeholder="Your email*"
          buttonText="Get information"
          config={config.contactForm}
        />
        <Socials />
      </div>
      <div className="column_right">
        <Slider>
          {content.slides.map((slide, i) => (
            <SliderItem title={slide.title} subtitle={slide.subtitle}>
              <img className="slider-item__background" src={slide.image} />
            </SliderItem>
          ))}
        </Slider>
      </div>
    </div>
  </section>
)

export default prefaceInvestment
