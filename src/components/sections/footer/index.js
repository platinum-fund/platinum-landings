import React from 'react'
import './section_footer.less'

const Footer = ({ noJapaneseAddress }) => (
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
        <div className="card">
          <h6 className="card__title">
            PLATINUM SECURITIES company LTD, branches:
          </h6>
          <p className="card__subtitle">
            You can book a meeting here with our representatives
          </p>
          <div className="card__description">
            <p className="card__address">
              Singapore: 18 Sin Ming Lane, MIDVIEW city, 573960
            </p>
            <p className="card__address">
              Hong Kong: Eib Centre, 7/F Bonham Strand, Sheung Wan
            </p>
            <p className="card__address">
              South Korea: Seoul, Gangnam-gu, Yeoksam 1-dong Seolleung-ro 103
              Road 21 / 서울특별시 강남구 역삼1동 선릉로103길 21 주변
            </p>
            {!noJapaneseAddress && (
              <p className="card__address">
                Japan: Ichibancyo, Chiyoda-ku Tokyo / 東京都千代田区一番町
              </p>
            )}
            <p className="card__address">
              Thailand: Asok, PS Tower, 20st floor, Bangkok
            </p>
            <p className="card__address">
              Seychelles: Global Gateway 8, Rue de la Perle, Providence, Mahe
            </p>
            <p className="card__address">
              Australia: Melbourne VIC 3000, 152 Elizabeth St
            </p>
          </div>
        </div>
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
