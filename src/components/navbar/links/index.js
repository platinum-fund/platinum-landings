import configPages from 'src/config'
import links from './links'

function getLinkByLanguage(pageName, language) {
  const isPageTranslated =
    configPages[pageName] &&
    configPages[pageName].languages &&
    configPages[pageName].languages.indexOf(language) !== -1

  if (isPageTranslated && language !== 'en') {
    return `/${language}/${pageName}`
  }

  return `/${pageName}`
}

function getLinks(language) {
  return links.map(link => {
    if (link.href) {
      return link
    }

    return {
      ...link,
      href: getLinkByLanguage(link.pageName, language)
    }
  })
}

export default getLinks
