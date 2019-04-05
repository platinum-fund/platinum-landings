import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import './language-menu.less'
import configPages from 'src/config'
import GetLocationPathName from './GetLocationPathName'
import { CurrentLanguage } from './CurrentLanguage'
import { CurrentLanguageList } from './CurrentLanguageList'

const LanguageMenuPure = props => {
  const { closeLanguageMenu, toggleLanguageMenu, isLanguageMenuShown } = props

  const locationPathname = GetLocationPathName

  const currentPageConfig = configPages[locationPathname]
  const currentPageLanguages = currentPageConfig.languages

  if (currentPageConfig && currentPageLanguages) {
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
              locationPathname={locationPathname}
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
