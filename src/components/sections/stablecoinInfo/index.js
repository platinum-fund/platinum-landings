import React from 'react'
import './section_stablecoin-info.less'

const StablecoinInfo = () => (
  <section className="section_stablecoin-info">
    <div className="wrapper_shrink">
      <div className="headline">
        <div className="headline _title">
          <h2 className="title title_type_second _white">
            Issued x tokens secured by y bitcoin
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text text_size_big">MARKET CAP : $93,235,484.07</p>
          <p className="text text_size_big">
            Total Supply: 93,947,432.673681354349164009 USDQ
          </p>
        </div>
        <div className="col">
          <p className="text text_size_big">Holders: 18,475 addresses</p>
          <p className="text text_size_big">Transfers: 729,476</p>
        </div>
      </div>
      <div className="table">
        <div className="table__content">
          <div className="table__col table__col_first">
            <div className="table__title">Wallets</div>
            <div className="table__row">
              5afde72470766776eec46308d7685918137f9cea79aa11b62998e751240f6ad2
            </div>
            <div className="table__row">
              5afde72470766776eec46308d7685918137f9cea79aa11b62998e751240f6ad2
            </div>
            <div className="table__row">
              5afde72470766776eec46308d7685918137f9cea79aa11b62998e751240f6ad2
            </div>
          </div>
          <div className="table__col">
            <div className="table__title">The amount of locked BTC</div>
            <div className="table__row">5.000</div>
            <div className="table__row">2.000</div>
            <div className="table__row">800</div>
          </div>
          <div className="table__col">
            <div className="table__title">The amont of issued USDQ</div>
            <div className="table__row">12.162.650</div>
            <div className="table__row">4.865.060</div>
            <div className="table__row">1.946.024</div>
          </div>
        </div>
        <div className="table__footer table__content">
          <div className="table__col table__col_first">
            <p className="table__text">
              The development of our project is public. Follow the links below:
            </p>
            <p className="table__text">
              <a href="#">Roadmap</a>
            </p>
            <p className="table__text">
              <a href="#">Github</a>
            </p>
          </div>
          <div className="table__col">
            <button className="button">View Scanner</button>
          </div>
        </div>
      </div>
    </div>
    <div className="section_stablecoin-info__background">USDQ</div>
  </section>
)

export default StablecoinInfo
