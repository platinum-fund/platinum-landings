import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import TranslationProvider from '../translationProvider'
import { FormattedHTMLMessage } from 'react-intl'
import LanguageContext from 'src/contexts/language'
import translations from './translations'
import logo from 'src/images/logo.svg'
import './navbar.less'
import configPages from 'src/config'
import LanguageMenu from '../languageMenu'
import locationPathName from '../languageMenu/locationPathName'
import { NavbarData } from './NavbarData'

const Navbar = ({ closeMenu, toggleMenu, isMenuShown }) => {
  const currentLanguage = LanguageContext._currentValue
  const domainHref = 'https://platinum.fund/'
  const hrefWithLanguage = pageName => {
    if (
      configPages[pageName] !== undefined &&
      configPages[pageName].languages !== undefined &&
      configPages[pageName].languages.indexOf(currentLanguage) !== -1 &&
      currentLanguage !== 'en'
    ) {
      return domainHref + currentLanguage + '/' + pageName + '/'
    } else {
      return domainHref + pageName + '/'
    }
  }
  const navigationObject = NavbarData
  const navigationItems = (start, limit) => {
    let result = []
    if (limit - start <= navigationObject.length) {
      for (let i = start; i <= limit; i++) {
        let linkClassName = 'navbar__link'
        if (locationPathName === navigationObject[i].hrefName) {
          linkClassName += ' navbar__link_active'
        }
        let linkHref = hrefWithLanguage(navigationObject[i].hrefName)
        if (navigationObject[i].hrefName.indexOf('http') !== -1) {
          linkHref = navigationObject[i].hrefName
        }
        result.push(
          <a className={linkClassName} href={linkHref}>
            <FormattedHTMLMessage id={navigationObject[i].titleId} />
          </a>
        )
      }
    }
    return result
  }

  return (
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
            <div
              className={`navbar__links ${isMenuShown ? 'shown' : 'hidden'}`}
            >
              {navigationItems(0, 9)}
              <div className="navbar__links-group-wrapper">
                <p className="navbar__link navbar__more-button">More</p>
                <div className="navbar__links-group">
                  {navigationItems(10, 14)}
                </div>
              </div>
            </div>
          </OutsideClickHandler>
          <LanguageMenu />
        </div>
      </div>
    </TranslationProvider>
  )
}

export default Navbar
