import React from 'react'
import './section_preface.less'

const PrefacePure = () => (
  <section className="section _preface">
    <div className="wrapper _shrink">
      <div className="headline">
        <h6 className="title _type_second">We are experts in</h6>
        <h1 className="title _type_main">SECURITY TOKEN OFFERING</h1>
        <h4 className="title _type_second">
          Platinum enables trillions of dollars migrate to blockchain
        </h4>
      </div>
      <div className="wrapper _buttons">
        <button className="js-form-button button _size_50 _theme_orange">
          Create SECURITY TOKEN
        </button>
        <button className="js-form-button button _size_50 _theme_light">
          Get consultation
        </button>
      </div>
      <div className="scroll-down">
        <p className="scroll-down__text">scroll to know more</p>
        <img
          className="scroll-down__icon"
          src={require('src/images/section-preface/scroll-down.svg')}
        />
      </div>
    </div>
  </section>
)

export default PrefacePure
