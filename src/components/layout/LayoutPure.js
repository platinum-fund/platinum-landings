import React from 'react'
import 'src/common.blocks/index.less'
import LanguageContext from 'src/contexts/language'
import Navbar from 'src/components/navbar'
import { GoogleTagManagerBody, YandexMetrikaBody } from './scripts/analytics'
import HEAD from './parts/head'

const LayoutPure = props => {
  const {
    pageTitle,
    language = 'en',
    children,
    description,
    locales,
    landingName
  } = props

  return (
    <LanguageContext.Provider value={language}>
      <HEAD
        title={pageTitle}
        description={description}
        locales={locales}
        landingName={landingName}
      />
      <GoogleTagManagerBody />
      <YandexMetrikaBody />
      <Navbar />
      {children}
    </LanguageContext.Provider>
  )
}

export default LayoutPure
