import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import TranslationProvider from '../translationProvider'
import { FormattedHTMLMessage } from 'src/components/i18n'
import translations from './translations'
import logo from 'src/images/logo.svg'
import './navbar.less'
import LanguageMenu from '../languageMenu'
import locationPathName from '../languageMenu/locationPathName'

function getLinkClassName(pageName) {
  return locationPathName === pageName
    ? 'navbar__link navbar__link_active'
    : 'navbar__link'
}

const Navbar = ({ closeMenu, toggleMenu, isMenuShown, links }) => (
  <TranslationProvider translations={translations}>
    <div className="navbar">
      <div className="wrapper_shrink">
        <a href="https://platinum.fund/sto/">
          <img className="navbar__logo" src={logo} alt="" />
        </a>
        <div className="navbar__menu-button" onClick={toggleMenu}>
          <FormattedHTMLMessage id="services" />
        </div>
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <div className={`navbar__links ${isMenuShown ? 'shown' : 'hidden'}`}>
            {links.slice(0, 10).map((link, i) => (
              <a
                className={getLinkClassName(link.pageName)}
                href={link.href}
                key={link.titleId}
              >
                <FormattedHTMLMessage id={link.titleId} />
              </a>
            ))}
            <div className="navbar__links-group-wrapper">
              <p className="navbar__link navbar__more-button">More</p>
              <div className="navbar__links-group">
                {links.slice(10).map(link => (
                  <a
                    className={getLinkClassName(link.pageName)}
                    href={link.href}
                    key={link.titleId}
                  >
                    <FormattedHTMLMessage id={link.titleId} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </OutsideClickHandler>
        <LanguageMenu />
      </div>
    </div>
  </TranslationProvider>
)

export default Navbar
