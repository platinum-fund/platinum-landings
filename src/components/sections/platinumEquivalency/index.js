import React from 'react'
import './section_platinum-equivalency.less'
import ethGraphImage from 'src/images/section-platinum-equivalency/eth-graph.png'
import platinumGraphImage from 'src/images/section-platinum-equivalency/platinum-graph.png'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'
import { FormattedHTMLMessage } from 'src/components/i18n'
import LazyImage from 'src/components/lazyImage'

const PlatinumEquivalencyPure = () => (
  <TranslationProvider translations={translations}>
    <section className="section_platinum-equivalency">
      <div className="wrapper_shrink">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="theEthereum" />
          </h2>
          <h4 className="title title_type_subtitle">
            <FormattedHTMLMessage id="whatEthereumDid" />
          </h4>
        </div>
        <div className="wrapper_images">
          <LazyImage className="image" src={ethGraphImage} />
          <LazyImage className="image" src={platinumGraphImage} />
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default PlatinumEquivalencyPure
