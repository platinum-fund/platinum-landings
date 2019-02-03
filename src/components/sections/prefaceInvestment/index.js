import React from 'react'
import './section_preface-investment.less'
import ContactForm from 'src/components/contactForm'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'

const prefaceInvestment = () => (
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
        />
      </div>
      <div className="column_right">
        <Slider>
          <SliderItem title={'ceo'}>
            <img
              className="slider-item__background"
              src={require('src/images/section-preface-investment/team/angelika.png')}
            />
          </SliderItem>
          <SliderItem title={'example'}>
            <img
              className="slider-item__background"
              src={require('src/images/section-preface-investment/team/alex.png')}
            />
          </SliderItem>
          <SliderItem title={'example2'}>
            <img
              className="slider-item__background"
              src={require('src/images/section-preface-investment/team/dmitry.png')}
            />
          </SliderItem>
        </Slider>
      </div>
    </div>
  </section>
)

export default prefaceInvestment
