import React from 'react'
import './section_stablecoin-info.less'

const StablecoinInfo = () => (
  <section className="section_stablecoin-info">
    <div className="wrapper_shrink">
      <div className="table">
        <div className="table__content">
          <div className="table__col table__col_first">
            <div className="table__title">Wallets</div>
            <div className="table__row">
              <a
                href="https://www.blockchain.com/ru/btc/address/34VzujyGvWnaW88i7Vm42akWsZFmcDDBc2"
                className="link"
              >
                34VzujyGvWnaW88i7Vm42akWsZFmcDDBc2
              </a>
            </div>
          </div>
          <div className="table__col">
            <div className="table__title">The amount of locked BTC</div>
            <div className="table__row">23.60090683</div>
          </div>
        </div>
      </div>
    </div>
    <div className="section_stablecoin-info__background">USDQ</div>
  </section>
)

export default StablecoinInfo
