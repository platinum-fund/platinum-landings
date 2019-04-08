import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './language-menu.less'
import configPages from 'src/config'
import locationPathName from './locationPathName'
import { CurrentLanguage } from './CurrentLanguage'
import { CurrentLanguageList } from './CurrentLanguageList'

const LanguageMenuPure = props => {
  const { closeLanguageMenu, toggleLanguageMenu, isLanguageMenuShown } = props

  const locationPathNameCurrentPage = locationPathName

  if (
    configPages[locationPathNameCurrentPage] &&
    configPages[locationPathNameCurrentPage].languages
  ) {
    const currentPageConfig = configPages[locationPathNameCurrentPage]
    const currentPageLanguages = currentPageConfig.languages
    return (
      <div className="languages-menu">
        <CurrentLanguage toggleLanguageMenu={toggleLanguageMenu} />
        <OutsideClickHandler onOutsideClick={closeLanguageMenu}>
          <div
            className={`languages-menu__options languages-menu__options--${
              isLanguageMenuShown ? 'shown' : 'hidden'
            }`}
          >
            <CurrentLanguageList
              currentPageLanguages={currentPageLanguages}
              locationPathname={locationPathNameCurrentPage}
            />
          </div>
        </OutsideClickHandler>
      </div>
    )
  } else {
    return false
  }
}

export default LanguageMenuPure
