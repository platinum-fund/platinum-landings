import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slider.less'
import sliders from './content'

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
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
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
                  <img className="slide__main-image" src={slider.photo} />
                </div>
                <p className="slide__main">{slider.text}</p>
                <div className="slide__description">
                  <p className="author-name">{slider.name}</p>
                  <p className="author-position">{slider.position}</p>
                </div>
                <div className="slide__footer">
                  <img
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
