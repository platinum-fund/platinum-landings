import React from 'react'
import './section_welcome-image.less'
import Blockquote from 'src/components/sections/blockquote'

const WelcomeImage = () => (
  <section className="section_welcome-image">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h1 className="title title_type_main _white">
            decentralized stable trading asset collateralized by bitcoin
          </h1>
          <h4 className="title title_type_second">1 USDq = 1$</h4>
        </div>
      </div>
    </div>
    <Blockquote />
  </section>
)

export default WelcomeImage
