import React from 'react'
import './section_sto-standart.less'

const StoStandartPure = () => (
  <section className="section _sto-standart">
    <div className="wrapper _shrink">
      <h2 className="title _orange">PLS-360</h2>
      <h4 className="subtitle title fz-19 _light">
        Platinum Sercurity Token Standard
      </h4>
      <h2 className="description-title text fz-16">
        Platinum is upgrading the existing capital markets infrastructure to
        take advantage of blockchain technology’s benefits: seamless capital
        formation; instantaneous settlement for unique, unforgeable assets;
        negligible trading fees; and countless others.
      </h2>
      <div className="description-text text fz-13">
        In order to make this upgrade possible, we believe there needs to be a
        standard for security tokens that utilizes these benefits while
        satisfying regulations. With a standard in place, security token
        issuers, investors, exchanges, wallets, custody providers, and
        regulators can become comfortable with this technology, interoperability
        becomes easier, and adoption can be widespread. Similar to how the
        ERC-20 standard enabled the boom in utility tokens on the Ethereum
        blockchain, there needs to be a standard for security tokens.
        <br />
        The standard we have built at Polymath is ST-20. ST-20 is an extension
        of ERC-20 that introduces the ability to restrict transfers of
        blockchain tokens. ERC-20 tokens do not have any transfer restrictions
        and therefore can be freely traded by anyone. This is fine for so-called
        utility tokens. When dealing with securities, however, all securities
        holders must be KYC/AML verified, and there are many additional
        restrictions on the distribution and trading of securities. ST-20 is the
        solution to this problem. It allows security token issuers to maintain
        regulatory compliance through transfer restrictions. And beneficially,
        it is backward compatible with ERC-20 making it interoperable with much
        of the existing blockchain infrastructure available today.
      </div>
    </div>
  </section>
)

export default StoStandartPure
