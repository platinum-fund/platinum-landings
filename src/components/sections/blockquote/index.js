import React from 'react'
import './blockquote.less'

const copyToClipBoard = () => {
  let copyText = document.getElementById('smart_contract_address')
  console.log(copyText)
  let tempTextArea = document.createElement('textarea')
  tempTextArea.value = copyText.textContent
  document.body.appendChild(tempTextArea)
  tempTextArea.select()
  document.execCommand('Copy')
  tempTextArea.remove()
}

const Blockquote = () => (
  <blockquote className="section blockquote">
    <div className="wrapper_shrink">
      <div className="blockquote__content">
        <h3 className="blockquote__subtitle">Contract address:</h3>
        <h2 className="blockquote__title" id="smart_contract_address">
          0x4bc78aec3f32eba2228c216103265bae67993839
        </h2>
        <p className="blockquote__text">
          Our smart contract code was audited by{' '}
          <a
            href="https://www.proaudit.co/"
            className="colored"
            target="_blank"
          >
            ProAudit
          </a>{' '}
          company, whose report is publicly available{' '}
          <a
            href="https://ropsten.etherscan.io/address/0x4bc78aec3f32eba2228c216103265bae67993839#code"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
      <footer>
        <button className="blockquote__button" onClick={copyToClipBoard}>
          COPY
        </button>
      </footer>
    </div>
  </blockquote>
)

export default Blockquote
