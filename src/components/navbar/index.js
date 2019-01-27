import React from 'react'
import logo from 'src/images/logo.svg'
import './navbar.less'

const Navbar = props => (
  <div className="navbar">
    <div className="wrapper _shrink">
      <img className="navbar__logo" src={logo} />
      <button className="navbar__menu-button">Services</button>
      <div className="navbar__links">
        <a className="navbar__link" href="https://www.platinum.fund/sto">
          STO
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/listing">
          Listing
        </a>
        <a
          className="navbar__link"
          href="https://www.platinum.fund/ico-platform"
        >
          STO &amp; ICO dashboard
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/ico-start/">
          ICO start
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/wallet/">
          Wallet
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/legal">
          Legal
        </a>
        <a
          className="navbar__link"
          href="https://www.platinum.fund/marketmaking"
        >
          Market making
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/zmest">
          Marketing
        </a>
        <a
          className="navbar__link"
          href="https://hr.platinum.fund/index_en.html"
        >
          Hiring!
        </a>
        <a className="navbar__link" href="https://blog.platinum.fund/">
          Blog
        </a>
      </div>
    </div>
  </div>
)

export default Navbar
