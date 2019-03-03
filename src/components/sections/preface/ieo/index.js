import React from 'react'
import './section_preface-ieo.less'
import Socials from 'src/components/socials'
import SectionsNavbar from 'src/components/sectionsNavbar'
import content from './content'

const PrefacePure = () => (
  <section className="section_preface-ieo">
    <div className="wrapper_shrink">
      <header className="headline">
        <h1 className="title title_type_main">
          IEO - INITIAL
          <span className="title_type_main-attention">EXCHANGE OFFERING</span>
          TOP notch way to rise money for your project!
        </h1>
      </header>
      <div className="wrapper_buttons">
        <button className="js-form-button button button_theme_main">
          APPLY NOW for MORE DETAILS!
        </button>
      </div>
      <div className="wrapper_bottom">
        <div className="wrapper_socials">
          <p className="title">Follow us</p>
          <Socials />
        </div>
        <SectionsNavbar navigation={content.sectionsNavbar} />
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
