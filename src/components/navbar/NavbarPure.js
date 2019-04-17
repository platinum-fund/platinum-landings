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

const Navbar = ({ closeMenu, toggleMenu, isMenuShown }) => {
  const currentLanguage = LanguageContext._currentValue
  const domainHref = 'https://platinum.fund/'
  const hrefWithLanguage = pageName => {
    if (
      configPages[pageName] !== undefined &&
      configPages[pageName].languages !== undefined &&
      configPages[pageName].languages.indexOf(currentLanguage) !== -1
    ) {
      return domainHref + currentLanguage + '/' + pageName + '/'
    } else {
      return domainHref + pageName + '/'
    }
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
              <a className="navbar__link" href={hrefWithLanguage('sto')}>
                <FormattedHTMLMessage id="sTO" />
              </a>
              <a className="navbar__link" href={hrefWithLanguage('ieo')}>
                <FormattedHTMLMessage id="ieo" />
              </a>
              <a className="navbar__link" href={hrefWithLanguage('listing')}>
                <FormattedHTMLMessage id="listing" />
              </a>
              <a
                className="navbar__link"
                href={hrefWithLanguage('ico-platform')}
              >
                <FormattedHTMLMessage id="sTOICODashboard" />
              </a>
              <a className="navbar__link" href={hrefWithLanguage('ico-start')}>
                <FormattedHTMLMessage id="iCOStart" />
              </a>
              <a className="navbar__link" href={hrefWithLanguage('legal')}>
                <FormattedHTMLMessage id="legal" />
              </a>
              <a
                className="navbar__link"
                href="https://platinum.fund/marketmaking/"
              >
                <FormattedHTMLMessage id="marketMaking" />
              </a>
              <a className="navbar__link" href={hrefWithLanguage('zmest')}>
                <FormattedHTMLMessage id="marketing" />
              </a>
              <a className="navbar__link" href="https://blog.platinum.fund/">
                <FormattedHTMLMessage id="blog" />
              </a>
              <div className="navbar__links-group-wrapper">
                <p className="navbar__link navbar__more-button">More</p>
                <div className="navbar__links-group">
                  <a
                    className="navbar__link"
                    href={hrefWithLanguage('security')}
                  >
                    <FormattedHTMLMessage id="createSecurityToken" />
                  </a>
                  <a
                    className="navbar__link"
                    href={hrefWithLanguage('business')}
                  >
                    <FormattedHTMLMessage id="buyPlatinumEquity" />
                  </a>
                  <a className="navbar__link" href={hrefWithLanguage('mlm')}>
                    <FormattedHTMLMessage id="mlm" />
                  </a>
                  <a className="navbar__link" href={hrefWithLanguage('wallet')}>
                    <FormattedHTMLMessage id="wallet" />
                  </a>
                  <a className="navbar__link" href={hrefWithLanguage('hr')}>
                    <FormattedHTMLMessage id="hiring" />
                  </a>
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
