import React from 'react'
import './medium-news.less'
import Article from './Article'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const MediumNewsPure = ({ feed }) => {
  return (
    <TranslationProvider translations={translations}>
      <div className="medium-news">
        <div className="medium-news__articles">
          {feed.length && feed.map(item => <Article article={item} />)}
        </div>
        <a
          className="medium-news__all-news"
          href="https://medium.com/@PlatinumFund"
          target="_blank"
        >
          <p className="medium-news__all-news-title">
            <FormattedHTMLMessage id="readAllNews" />
          </p>
          <img
            className="medium-news__logo"
            src={require('src/images/icons/medium.svg')}
            alt="medium logo"
          />
        </a>
      </div>
    </TranslationProvider>
  )
}

export default MediumNewsPure
