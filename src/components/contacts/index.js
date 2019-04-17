import React from 'react'
import LazyImage from 'src/components/lazyImage'
import content from './content'
import './contacts.less'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import Socials from './Socials'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { NextArrow, PrevArrow } from 'src/components/slickSlider'

const Contacts = () => {
  const settings = {
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <TranslationProvider translations={translations}>
      <div className="contacts">
        <Slider {...settings}>
          {content.map((contact, i) => (
            <div className="contact-wrapper" key={contact.name}>
              <div key={`contact${i}`} className="contact">
                <header className="contact__header">
                  <div className="contact__photo-wrapper">
                    <LazyImage
                      className="contact__photo"
                      src={contact.photo}
                      alt="photo"
                    />
                  </div>
                  <p className="contact__name">{contact.name}</p>
                  <p className="contact__position">{contact.position}</p>
                </header>
                <Socials contact={contact} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </TranslationProvider>
  )
}

export default Contacts
