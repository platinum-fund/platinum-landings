import React from 'react'
import './section_who-we-are.less'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'
import SlideTitle from './slider/SlideTitle'
import slidesContent from './slider/content'
import Socials from 'src/components/socials'

const WhoWeAre = () => (
  <section className="section section_who-we-are">
    <div className="wrapper_section-content">
      <Slider>
        {slidesContent.titles.map((title, i) => (
          <SliderItem
            title={
              <SlideTitle
                attentionText={title.attentionText}
                mainText={title.mainText}
                key={`whoWeAreSlideTitle${i}`}
              />
            }
          />
        ))}
      </Slider>
      <header className="headline">
        <h2 className="title title_type_section-big-attention">Who we are:</h2>
        <h6 className="title title_type_subtitle">
          Platinum.fund is an international STO/IEO/ICO/POST ICO consulting,
          promotion and fundraising company with offices in Japan, Korea,
          Thailand, Belarus. <br /> Over 112 specialists with 3 years experience
          in crypto and 7 years in financial markets. <br /> We have an
          extensive range of services and expertise in marketing and PR,
          management, consulting, programming, cyber-security, education, legal
          advisory and many more.
        </h6>
      </header>
      <Socials />
    </div>
  </section>
)

export default WhoWeAre
