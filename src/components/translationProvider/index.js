import React from 'react'
import LanguageContext from 'src/contexts/language'
import { IntlProvider } from 'react-intl'

const TranslationProvider = ({ language, translations, children }) => {
  return (
    <LanguageContext.Consumer>
      {language => (
        <IntlProvider
          locale="en"
          messages={translations[language] || translations['en']}
        >
          {children}
        </IntlProvider>
      )}
    </LanguageContext.Consumer>
  )
}

export default TranslationProvider
