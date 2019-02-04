import React from 'react'
import './section_why-us.less'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'

const SliderItemTitle = ({ className = '' }) => (
  <h6 className={`slider__title ${className}`}>
    <span className="slider__title-attention">700+</span>
    Projects Consulted and
    <span className="slider__title-attention">$200M+</span>
    Funds Collected
  </h6>
)

const WhyUs = () => (
  <section className="section section_why-us">
    <div className="wrapper_section-content">
      <h2 className="headline">
        <span className="title title_type_section-big">Why</span>
        <span className="title title_type_section-big-attention">Platinum</span>
        <span className="title title_type_section-big">?</span>
      </h2>
      <Slider>
        <SliderItem title={<SliderItemTitle />}>
          <img
            className="slider-item__background"
            src={require('src/images/section-why-us/slide-1.png')}
          />
        </SliderItem>
      </Slider>
    </div>
  </section>
)

export default WhyUs
