import React from 'react'
import LanguageContext from 'src/contexts/language'

export const CurrentLanguage = ({ toggleLanguageMenu }) => {
  const currentLanguage = LanguageContext._currentValue
  return (
    <button
      className="languages-menu__current-option"
      onClick={toggleLanguageMenu}
    >
      <img
        alt={'Language ' + currentLanguage}
        className="languages-menu__option-image"
        src={require('./images/languages/' + currentLanguage + '.png')}
        data-option={currentLanguage}
      />
      <p className="languages-menu__option-name">{currentLanguage}</p>
    </button>
  )
}
