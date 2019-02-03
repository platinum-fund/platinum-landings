import React from 'react'
import './section_who-we-are.less'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'

const SliderItemTitle = ({ title }) => (
  <div>
    <p className="slider__subtitle">Facts:</p>
    <h6 className="slider__title">{title}</h6>
  </div>
)

const WhoWeAre = () => (
  <section className="section section_who-we-are">
    <div className="wrapper_section-content">
      <Slider>
        <SliderItem
          title={
            <SliderItemTitle title="3+ years experience in crypto markets" />
          }
        />
        <SliderItem
          title={
            <SliderItemTitle title="7+ years experience in financial markets" />
          }
        />
        <SliderItem title={<SliderItemTitle title="112+ specialists" />} />
      </Slider>
      <header className="headline">
        <h2 className="title title_type_section-big-attention">Who we are:</h2>
        <h6 className="title title_type_subtitle">
          Platinum.fund is an international STO/IEO/ICO/POST ICO consulting,
          promotion and fundraising company with offices in offices in Japan,
          Korea, Thailand, Belarus. <br /> Over 112 specialists with 3 years
          experience in crypto and 7 years in financial markets. <br /> We have
          an extensive range of services and expertise in marketing and PR,
          management, consulting, programming, cyber-security, education, legal
          advisory and many more.
        </h6>
      </header>
      <button className="button button_theme_light">
        Play video about Platinum
      </button>
    </div>
  </section>
)

export default WhoWeAre
