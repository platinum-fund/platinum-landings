import React from 'react'

export const SlideTitle = ({ attentionText, mainText }) => (
  <div>
    <p className="slider__subtitle">Facts:</p>
    <h6 className="slider__title">
      <span className="slider__title-attention">{attentionText}</span>
      {mainText}
    </h6>
  </div>
)

export default SlideTitle
