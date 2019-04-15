import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './section_market-making-slider.less'
import graph1 from './content/images/graphs/graph1.jpg'
import graph2 from './content/images/graphs/graph2.png'
import SliderText from './SliderText'
import Socials from 'src/components/socials'

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          autoplay: false
        }
      }
    ]
  }

  return (
    <div className="section_market-making-slider">
      <div className="o-content">
        <Slider {...settings}>
          <div className="o-slide">
            <img className="c-graph-img" src={graph1} alt="graph" />
            <SliderText
              firstPart={'doNotLetYour'}
              secondPart={'tokenDie'}
              linkText={'getFreeMarketMaking'}
            />
          </div>
          <div className="o-slide">
            <img className="c-graph-img" src={graph2} alt="graph" />
            <SliderText
              firstPart={'makeYourToken'}
              secondPart={'superstar'}
              linkText={'getFreeMarketMaking'}
            />
          </div>
        </Slider>
      </div>
      <Socials sidebar />
    </div>
  )
}

export default SlickSlider
