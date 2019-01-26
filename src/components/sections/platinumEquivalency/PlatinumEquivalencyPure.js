import React from 'react'
import './section_platinum-equivalency.less'
import ethGraphImage from 'src/images/section-platinum-equivalency/eth-graph.png'
import platinumGraphImage from 'src/images/section-platinum-equivalency/platinum-graph.png'

const PlatinumEquivalencyPure = () => (
  <section className="section _platinum-equivalency">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section display_inline">The Ethereum</h2>
        <h2 className="title _type_section _orange display_inline">Platinum</h2>
        <h2 className="title _type_section  display_inline">Equivalency</h2>
        <h4 className="title _type_subtitle">
          What Ethereum did for tokens, Platinum will do for securities
        </h4>
      </div>
      <div className="wrapper _images">
        <img className="image" src={ethGraphImage} />
        <img className="image" src={platinumGraphImage} />
      </div>
    </div>
  </section>
)

export default PlatinumEquivalencyPure
