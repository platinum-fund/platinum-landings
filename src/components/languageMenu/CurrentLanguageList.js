import React from 'react'

export const CurrentLanguageList = ({
  currentPageLanguages,
  locationPathname
}) =>
  currentPageLanguages.map((element, index) => {
    let locationPart = '/'
    console.log(element)
    if (element !== 'en') {
      locationPart = '/' + element + '/'
    }
    return (
      <a
        className="languages-menu__option"
        href={locationPart + locationPathname + '/'}
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
  })
