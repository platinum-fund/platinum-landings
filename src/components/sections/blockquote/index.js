import React from 'react'
import './blockquote.less'

const Blockquote = () => (
  <blockquote className="section blockquote">
    <div className="wrapper_shrink">
      <div className="blockquote__content">
        <h3 className="blockquote__subtitle">Contract address:</h3>
        <h2 className="blockquote__title">
          0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd
        </h2>
        <p className="blockquote__text">
          Our smart contract code was audited by{' '}
          <a href="#" className="colored">
            ProAudit
          </a>{' '}
          company, whose report is publicly available <a href="#">here</a>.
        </p>
      </div>
      <footer>
        <button className="blockquote__button">COPY</button>
      </footer>
    </div>
  </blockquote>
)

export default Blockquote
