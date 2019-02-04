import React from 'react'
import './token-list.less'
import tokenList from './content'
import Slider from 'src/components/slider'
import SliderItem from 'src/components/slider/SliderItemPure'

const TokenList = ({ list }) => (
  <div className="token-list">
    {list.map((token, i) => (
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

const TokenListWrapper = () => (
  <div className="token-list-wrapper">
    <Slider>
      <SliderItem>
        <TokenList list={tokenList.slice(0, 27)} />
      </SliderItem>
      <SliderItem>
        <TokenList list={tokenList.slice(27, 54)} />
      </SliderItem>
      <SliderItem>
        <TokenList list={tokenList.slice(54)} />
      </SliderItem>
    </Slider>
  </div>
)

export default TokenListWrapper
