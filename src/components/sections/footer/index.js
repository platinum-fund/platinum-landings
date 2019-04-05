import React from 'react'
import './section_footer.less'

const Footer = () => (
  <section className="section_footer" id="faq">
    <div className="wrapper_shrink">
      <div className="column">
        <p
          className="description"
          itemscope
          itemtype="https://schema.org/Organization"
        >
          <span itemprop="name">PLATINUM SECURITIES company LTD, </span>
          <span itemprop="streetAddress">
            Global Gateway 8, Rue de la Perle
          </span>
          ,<span itemprop="addressRegion"> Providence, Mahe</span>,
          <span itemprop="addressCountry"> Seychelles</span>.
        </p>
      </div>
      <div className="column">
        <p className="copyright">
          All copyright and intellectual property rights in the information and
          images contained on this website are owned by PLATINUM SECURITIES
          company LTD. Any use of images, copying of information, use of logos,
          color combinations, design and construction solutions without
          permission of PLATINUM SECURITIES company LTD is prohibited. Any
          information posted on this website is not a public offer. We work
          based on agreements concluded in writing on a case-by-case. In any
          case, for clarification, please contact us.
        </p>
      </div>
    </div>
  </section>
)

export default Footer
