import React, { Component } from 'react'
import './section_preface-listing.less'
import { init, animate } from './background'

class PrefaceSmart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    init()
    animate()
  }

  render() {
    return (
      <section className="section_preface-listing">
        <div className="section_preface-listing__container">
          <h2 className="section_preface-listing__title">
            Platinum Listing is not just a listing service, but a company that
            offers efficiency and quality in the crypto industry. We are proud
            to be one of the BIGGEST listing services on a planet.
          </h2>
          <button className="js-form-button section_preface-listing__button">
            PRESS and GET LIST OF EXCHANGES WITH BEST PRICES NOW!
          </button>
        </div>
        <div className="section_preface-listing__background" />
      </section>
    )
  }
}

export default PrefaceSmart
