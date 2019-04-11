import React, { Component } from 'react'
import './section_preface-listing.less'
import { init, animate } from './background'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

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
      <TranslationProvider translations={translations}>
        <section className="section_preface-listing">
          <div className="section_preface-listing__container">
            <h2 className="section_preface-listing__title">
              <FormattedHTMLMessage id="heroTitle" />
            </h2>
            <button className="js-form-button section_preface-listing__button">
              <FormattedHTMLMessage id="btnGetFreeConsultationNow" />
            </button>
          </div>
          <div className="section_preface-listing__background" />
        </section>
      </TranslationProvider>
    )
  }
}

export default PrefaceSmart
