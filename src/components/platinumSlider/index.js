import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.less'
import LazyImage from 'src/components/lazyImage'
import sliders from './content'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

const PrevArrow = ({ onClick }) => (
  <div className={`arrow _left`} onClick={onClick} />
)

const NextArrow = ({ onClick }) => (
  <div className={`arrow _right`} onClick={onClick} />
)

const ReviewsSlider = props => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <TranslationProvider translations={translations}>
      <div className="about-slider">
        <Slider {...settings}>
          {sliders.map((slider, index) => (
            <div className="slide" key={`review${slider.name + index}`}>
              <div className="slide-index">{'0' + (index + 1)}</div>
              <LazyImage className="image" src={slider.image} />
              <div className="wrapper _content">
                <h4 className="title">
                  <FormattedHTMLMessage id={slider.title} />
                </h4>
                {slider.list.map((item, itemIndex) => {
                  const listClassName = slider.listClassName || ''
                  const itemClassName = item.className || ''
                  const className = listClassName + ' ' + itemClassName
                  return (
                    <div
                      className={`wrapper ${className}`}
                      key={`sliderItemDesc${itemIndex}`}
                    >
                      <p className="text-title text">
                        {item.title && <FormattedHTMLMessage id={item.title} />}
                      </p>
                      <p className="text-description text">
                        {item.description && (
                          <FormattedHTMLMessage id={item.description} />
                        )}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </TranslationProvider>
  )
}

export default ReviewsSlider
