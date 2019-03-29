import React from 'react'
import '../section_preface.less'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/media-preview')
}

const PrefacePure = () => (
  <section className="section_preface">
    <div className="wrapper_shrink">
      <div className="headline">
        <h6 className="title title_type_second">We are experts in</h6>
        <h1 className="title title_type_main-attention">
          SECURITY TOKEN OFFERING
        </h1>
        <h4 className="title title_type_second">
          Launch your security token in minutes
        </h4>
      </div>
      <div className="wrapper_buttons">
        <button className="js-form-button button button_theme_main">
          CREATE SECURITY TOKEN NOW!
        </button>
        <button className="js-form-button button button_theme_light">
          GET FREE CONSULTATION!
        </button>
      </div>
      <div className="section_media-preview">
        <media-preview />
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
