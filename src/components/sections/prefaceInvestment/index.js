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
              Invest now in equity of PLATINUM
            </span>
            <span className="title title_type_main">
              - successful Blockchain Development Company !
            </span>
          </h2>
          <h4 className="title title_type_subtitle">
            We are one of the biggest and profitable companies at the crypto
            market
          </h4>
        </header>
        <ContactForm
          label="Enter your email to get the prospectus"
          placeholder="Your email*"
          buttonText="Get more details now!"
          config={config.contactForm}
        />
        <Socials />
      </div>
      <div className="column_right">
        <Slider>
          {content.slides.map((slide, i) => (
            <SliderItem
              title={slide.title}
              subtitle={slide.subtitle}
              key={`prefaceTeamSlide${i}`}
            >
              <img className="slider-item__background" src={slide.image} />
            </SliderItem>
          ))}
        </Slider>
      </div>
    </div>
  </section>
)

export default prefaceInvestment
