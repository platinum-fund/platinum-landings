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
                href="https://www.blockchain.com/ru/btc/address/33rBa5czk6HHTNWr1MUGXTeSXto47V5UnS"
                className="link"
              >
                33rBa5czk6HHTNWr1MUGXTeSXto47V5UnS
              </a>
            </div>
          </div>
          <div className="table__col">
            <div className="table__title">The amount of locked BTC</div>
            <div className="table__row">11.00015207</div>
          </div>
        </div>
      </div>
    </div>
    <div className="section_stablecoin-info__background">USDQ</div>
  </section>
)

export default StablecoinInfo
