import React from 'react'
import './section_past-supported-tokens.less'
import TokenList from 'src/components/tokenList'

const PastSupportedTokens = () => (
  <section className="section_past-supported-tokens">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Past supported tokens</h2>
        <h4 className="title title_type_subtitle">
          Platinum team is supporting and consulting more than 260 tokens
        </h4>
      </div>
      <TokenList />
    </div>
  </section>
)

export default PastSupportedTokens
