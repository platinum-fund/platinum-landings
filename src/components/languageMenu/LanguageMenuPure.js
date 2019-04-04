import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import LanguageContext from 'src/contexts/language'
import './language-menu.less'
import configPages from 'src/config'

const LanguageMenuPure = ({
  closeLanguageMenu,
  toggleLanguageMenu,
  isLanguageMenuShown
}) => {
  const locationPathname = window.location.href
    .split('/')
    .filter(function(element) {
      return element !== ''
    })
    .pop()
  if (
    configPages[locationPathname] &&
    configPages[locationPathname].languages !== -1
  ) {
    const currentLanguage = LanguageContext._currentValue
    const currentAvailableLanguage = configPages[locationPathname].languages
    const domainHref = 'https://platinum.fund/'

    const currentLanguageContent = (
      <button
        className="languages-menu__current-option"
        onClick={toggleLanguageMenu}
      >
        <img
          alt="Language en"
          className="languages-menu__option-image"
          src={require('./images/languages/' + currentLanguage + '.png')}
          data-option="en"
        />
        <p className="languages-menu__option-name">{currentLanguage}</p>
      </button>
    )

    const currentLanguageList = currentAvailableLanguage.map(
      (element, index) => {
        return (
          <a
            className="languages-menu__option"
            href={'/' + element + '/' + locationPathname + '/'}
            data-option={element}
            key={index}
          >
            <img
              alt={'Language ' + element}
              className="languages-menu__option-image"
              src={require('./images/languages/' + element + '.png')}
            />
            <p className="languages-menu__option-name">{element}</p>
          </a>
        )
      }
    )

    return (
      <div className="languages-menu">
        {currentLanguageContent}
        <OutsideClickHandler onOutsideClick={closeLanguageMenu}>
          <div
            className={`languages-menu__options languages-menu__options_${
              isLanguageMenuShown ? 'shown' : 'hidden'
            }`}
          >
            {currentLanguageList}
          </div>
        </OutsideClickHandler>
      </div>
    )
  } else {
    return false
  }
}

export default LanguageMenuPure
