import React from 'react'
import logo from 'src/images/logo.svg'
import './navbar.less'

const Navbar = props => (
  <div className="navbar">
    <div className="wrapper_shrink">
      <img className="navbar__logo" src={logo} alt="" />
      <button className="navbar__menu-button">Services</button>
      <div className="navbar__links">
        <a className="navbar__link" href="https://www.platinum.fund/sto/">
          STO
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/security/">
          Create security token
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/listing/">
          Listing
        </a>
        <a
          className="navbar__link"
          href="https://www.platinum.fund/ico-platform"
        >
          STO & ICO dashboard
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/ico-start/">
          ICO start
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/legal/">
          Legal
        </a>
        <a
          className="navbar__link"
          href="https://www.platinum.fund/marketmaking/"
        >
          Market making
        </a>
        <a className="navbar__link" href="https://www.platinum.fund/zmest/">
          Marketing
        </a>
        <a className="navbar__link" href="https://blog.platinum.fund/">
          Blog
        </a>
        <div className="navbar__links-group-wrapper">
          <p className="navbar__link navbar__more-button">More</p>
          <div className="navbar__links-group">
            <a className="navbar__link" href="https://platinum.fund/ieo/">
              IEO
            </a>
            <a
              className="navbar__link"
              href="https://platinum.fund/sto-consulting/"
            >
              STO Consulting
            </a>
            <a className="navbar__link" href="https://platinum.fund/business/">
              Business
            </a>
            <a
              className="navbar__link"
              href="https://www.platinum.fund/wallet/"
            >
              Wallet
            </a>
            <a className="navbar__link" href="https://www.platinum.fund/hr/">
              Hiring!
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar
