import React from 'react'
import '/section_platinum-equivalency.less'
import ethGraphImage from 'src/images/section-platinum-equivalency/eth-graph.png'
import platinumGraphImage from 'src/images/section-platinum-equivalency/platinum-graph.png'

const PlatinumEquivalencyPure = () => (
  <section className="section _platinum-equivalency">
    <div className="wrapper _shrink">
      <div className="wrapper _title fz-33 _regular">
        <h2 className="title _inline">The Ethereum</h2>
        <h2 className="title _orange _inline">Platinum</h2>
        <h2 className="title _inline">Equivalency</h2>
      </div>
      <h4 className="subtitle title fz-19 _light">
        What Ethereum did for tokens, Platinum will do for securities
      </h4>
      <div className="wrapper _images flex _wrap _jcsb">
        <img className="image" src={ethGraphImage} />
        <img className="image" src={platinumGraphImage} />
      </div>
    </div>
  </section>
)

export default PlatinumEquivalencyPure
