import React from 'react'
import './employee-reviews-slider.less'
import content from './content'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'
import LazyImage from 'src/components/lazyImage'

const EmployeeReviewsSlider = props => (
  <div className="employee-reviews-slider">
    <Slider>
      {content.map((slide, i) => (
        <SliderItem key={`employeesReviewsSlide${i}`}>
          <div className="slider__photo">
            <LazyImage className="image" src={slide.photo} />
          </div>
          <div className="slider__name">{slide.name}</div>
          <div className="slider__position">{slide.position}</div>
          <div className="slider__text">{slide.text}</div>
        </SliderItem>
      ))}
    </Slider>
  </div>
)

export default EmployeeReviewsSlider
