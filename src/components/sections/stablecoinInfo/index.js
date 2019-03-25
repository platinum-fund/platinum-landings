import React from 'react'
import './section_stablecoin-info.less'

const StablecoinInfo = () => (
  <section className="section_stablecoin-info">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_second _white">
            Issued 71.302 tokens secured by 29.60100823 bitcoin
          </h2>
        </div>
      </div>
      <div className="table">
        <div className="table__content">
          <div className="table__col table__col_first">
            <div className="table__title">Wallets</div>
            <div className="table__row">3L9gemtonHADkBproAsywkqNxCcsSYkoEC</div>
          </div>
          <div className="table__col">
            <div className="table__title">The amount of locked BTC</div>
            <div className="table__row">29.60100823</div>
          </div>
          <div className="table__col">
            <div className="table__title">The amont of issued USDQ</div>
            <div className="table__row">71.302</div>
          </div>
        </div>
      </div>
    </div>
    <div className="section_stablecoin-info__background">USDQ</div>
  </section>
)

export default StablecoinInfo
