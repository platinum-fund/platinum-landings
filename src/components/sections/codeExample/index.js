import React from 'react'
import './section_code-example.less'
import example1Image from 'src/images/section-code-example/example1.png'
import example2Image from 'src/images/section-code-example/example2.png'
import LazyImage from 'src/components/lazyImage'

const CodeExamplePure = () => (
  <section className="section_code-example">
    <div className="wrapper_shrink">
      <div className="wrapper_cards">
        <div className="card card_theme_light card_type_column">
          <LazyImage className="card__image" src={example1Image} />
        </div>
        <div className="card card_theme_light card_type_column">
          <LazyImage className="card__image" src={example2Image} />
        </div>
      </div>
    </div>
  </section>
)

export default CodeExamplePure
