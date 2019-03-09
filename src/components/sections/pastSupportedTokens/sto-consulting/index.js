import React from 'react'
import './section_past-supported-tokens-sto.less'
import TokenList from 'src/components/tokenList'

const PastSupportedTokens = () => (
  <section className="section section_past-supported-tokens-sto">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title">
          <span className="title title_type_section">PAST SUPPORTED</span>
          <span className="title title_type_section _orange">TOKENS</span>
        </h2>
        <h4 className="title title_type_subtitle">
          Platinum team is supporting and consulting more than 400 tokens
        </h4>
      </header>
      <TokenList />
    </div>
  </section>
)

export default PastSupportedTokens
