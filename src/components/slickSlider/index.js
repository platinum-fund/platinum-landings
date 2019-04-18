import React from 'react'

export const PrevArrow = ({ onClick, customClassName }) => (
  <div
    className={customClassName || `slick-slider-arrow--left`}
    onClick={onClick}
  />
)

export const NextArrow = ({ onClick, customClassName }) => (
  <div
    className={customClassName || `slick-slider-arrow--right`}
    onClick={onClick}
  />
)
