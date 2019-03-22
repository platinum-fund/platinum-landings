import React from 'react'
import './section_how-it-work-stable-coin.less'
import FirstStepImage from './images/first-step.svg'
import SecondStepImage from './images/second-step.svg'
import ThirdStepImage from './images/third-step.svg'

const HowItWorkStableCoin = () => (
  <section className="section_how-it-work-stable-coin">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_main _white">How it works?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="how-it-work-stable-coin__icon">
            <img
              src={FirstStepImage}
              alt="Traders"
              className="how-it-work-stable-coin__image"
            />
          </div>
        </div>
        <div className="col">
          <div className="how-it-work-stable-coin__icon">
            <img
              src={SecondStepImage}
              alt="Deposit"
              className="how-it-work-stable-coin__image"
            />
          </div>
        </div>
        <div className="col">
          <div className="how-it-work-stable-coin__icon">
            <img
              src={ThirdStepImage}
              alt="Robots"
              className="how-it-work-stable-coin__image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorkStableCoin
