import React from 'react'
import './section_business-growth.less'
import raiseCryptoImage from 'src/images/section-business-growth/raise-crypto.png'
import timeImage from 'src/images/section-business-growth/time.png'
import middlemanImage from 'src/images/section-business-growth/middleman.png'
import accessImage from 'src/images/section-business-growth/access.png'
import equityImage from 'src/images/section-business-growth/equity.png'

const BusinessGrowthPure = () => (
  <section className="section _business-growth">
    <div className="wrapper _shrink">
      <div className="wrapper _title fz-33 _regular">
        <h2 className="title _inline">How tokenization will</h2>
        <h2 className="title _orange _inline">growth your business</h2>
      </div>
      <div className="wrapper _cards flex _jcc">
        <div className="card">
          <img className="image" src={equityImage} />
          <h6 className="title _regular fz-23">Programmable Equity</h6>
          <p className="text _light fz-16">
            Polymath enables companies to take control of their equity issuance
            through programmable code.
          </p>
        </div>
        <div className="card">
          <img className="image" src={raiseCryptoImage} />
          <h6 className="title _regular fz-23">Raise in Cryptocurrency</h6>
          <p className="text _light fz-16">
            Raising in cryptocurrency opens up an entire wealth of new
            investors.
          </p>
        </div>
        <div className="card">
          <img className="image" src={timeImage} />
          <h6 className="title _regular fz-23">24/7 Access to Markets</h6>
          <p className="text _light fz-16">
            No matter where you live in the world, you have access to trading
            24/7.
          </p>
        </div>
        <div className="card">
          <img className="image" src={middlemanImage} />
          <h6 className="title _regular fz-23">Elimination of Middlemen</h6>
          <p className="text _light fz-16">
            Polymath eliminates the middleman and financial structures that
            hinder the deployment of equity.
          </p>
        </div>
        <div className="card">
          <img className="image" src={accessImage} />
          <h6 className="title _regular fz-23">Access to 2 Billion Unbanked</h6>
          <p className="text _light fz-16">
            There is a trove of wealth that is untouched by Wall Street that can
            now be accessed through Polymath.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default BusinessGrowthPure
