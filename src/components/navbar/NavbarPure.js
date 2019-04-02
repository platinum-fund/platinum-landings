import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import logo from 'src/images/logo.svg'
import './navbar.less'

const Navbar = ({ closeMenu, toggleMenu, isMenuShown }) => {
  return (
    <div className="navbar">
      <div className="wrapper_shrink">
        <img className="navbar__logo" src={logo} alt="" />
        <div className="navbar__menu-button" onClick={toggleMenu}>
          Services
        </div>
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <div className={`navbar__links ${isMenuShown ? 'shown' : 'hidden'}`}>
            <a className="navbar__link" href="https://platinum.fund/sto/">
              STO
            </a>
            <a className="navbar__link" href="https://platinum.fund/security/">
              Create security token
            </a>
            <a className="navbar__link" href="https://platinum.fund/listing/">
              Listing
            </a>
            <a
              className="navbar__link"
              href="https://platinum.fund/ico-platform"
            >
              STO & ICO dashboard
            </a>
            <a className="navbar__link" href="https://platinum.fund/ico-start/">
              ICO start
            </a>
            <a className="navbar__link" href="https://platinum.fund/legal/">
              Legal
            </a>
            <a
              className="navbar__link"
              href="https://platinum.fund/marketmaking/"
            >
              Market making
            </a>
            <a className="navbar__link" href="https://platinum.fund/zmest/">
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
                  href="https://platinum.fund/business/"
                >
                  Buy Platinum Equity
                </a>
                <a className="navbar__link" href="https://platinum.fund/mlm/">
                  MLM
                </a>
                <a
                  className="navbar__link"
                  href="https://platinum.fund/wallet/"
                >
                  Wallet
                </a>
                <a className="navbar__link" href="https://platinum.fund/hr/">
                  Hiring!
                </a>
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  )
}

export default Navbar
