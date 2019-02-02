import React from 'react'
import './token-list.less'
import tokenList from './content'

const TokenList = () => (
  <div className="token-list">
    {tokenList.map((token, i) => (
      <div className="token-list__item" key={`tokenListItem${i}`}>
        <img
          className="token-list__image"
          src={token.image}
          alt={token.imageAlt}
        />
        <p className="token-list__name">{token.name}</p>
      </div>
    ))}
  </div>
)

export default TokenList
