import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LazyImage from 'src/components/lazyImage'
import './reviews-slider.less'
import sliders from './content'
import { NextArrow, PrevArrow } from 'src/components/slickSlider'

const ReviewsSlider = props => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="reviews-slider">
      <Slider {...settings}>
        {sliders.map((slider, index) => (
          <div className="slide-wrapper" key={slider.name + index}>
            <div className="slide" key={`review${slider.name + index}`}>
              <div className="slide__content">
                <div className="slide__main-image-wrapper">
                  <LazyImage
                    className={`slide__main-image ${slider.isLogo && '_logo'}`}
                    src={slider.photo}
                  />
                </div>
                <p className="slide__main">{slider.text}</p>
                <div className="slide__description">
                  <p className="author-name">{slider.name}</p>
                  <p className="author-position">{slider.position}</p>
                </div>
                <div className="slide__footer">
                  <LazyImage
                    className="slide__footer-image"
                    src={slider.tokenLogotype}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ReviewsSlider
