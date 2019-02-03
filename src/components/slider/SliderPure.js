import React from 'react'
import './slider.less'

const SliderPure = props => {
  const {
    nextSlide,
    prevSlide,
    currentSlideIndex,
    lastSlideIndex,
    children
  } = props

  const activeSlideItem = React.Children.toArray(children)[currentSlideIndex]

  const childrenWrapper = React.Children.map(children, (child, i) => {
    const className = currentSlideIndex === i ? '_active' : '_inactive'
    return <div className={`slider__item-wrapper ${className}`}>{child}</div>
  })

  const progress =
    currentSlideIndex === 0 ? '0' : (currentSlideIndex / lastSlideIndex) * 100

  return (
    <div className="slider">
      <header className="slider__navigation">
        <h6 className="slider__title-wrapper">{activeSlideItem.props.title}</h6>
        <div className="slider__progress-wrapper">
          <div className="slider__progress" style={{ width: progress + '%' }} />
        </div>
        <div className="slider__arrows">
          <div className="slider__arrow-left" onClick={prevSlide} />
          <div className="slider__arrow-right" onClick={nextSlide} />
        </div>
      </header>
      <div className="slider__body">{childrenWrapper}</div>
    </div>
  )
}

export default SliderPure