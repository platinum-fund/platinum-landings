import React from 'react'
import './section_past-supported-tokens.less'
import TokenList from 'src/components/tokenList'

const PastSupportedTokens = () => (
  <section className="section section_past-supported-tokens">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title">
          <span className="title title_type_section-big">Past supported</span>
          <span className="title title_type_section-big-attention">tokens</span>
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
