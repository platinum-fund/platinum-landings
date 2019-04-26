import React from 'react'
import './medium-article.less'
import platinumLogo from 'src/images/favicon.png'
import extractContent from 'src/utils/extractContent'
import LazyImage from 'src/components/lazyImage'

function isThumbnailValid(url) {
  return new URL(url).hostname === 'cdn-images-1.medium.com'
}

const Article = ({ article }) => {
  const coverShown = isThumbnailValid(article.thumbnail)

  return (
    <a className="medium-article" href={article.link} target="_blank">
      {coverShown && (
        <div className="medium-article__cover-wrapper">
          <LazyImage
            className="medium-article__cover"
            src={article.thumbnail}
            alt="article cover"
          />
        </div>
      )}
      <header className="medium-article__header">
        <LazyImage
          className="medium-article__author-logo"
          src={platinumLogo}
          alt="platinum logo"
        />
        <div className="medium-article__info">
          <p className="medium-article__author-name">PLATINUM</p>
          <p className="medium-article__date">
            {new Date(article.pubDate).toDateString()}
          </p>
        </div>
      </header>
      <div className="medium-article__body">
        <h6 className="medium-article__title">{article.title}</h6>
        <p className="medium-article__description">
          {coverShown
            ? extractContent(article.description).slice(0, 190)
            : extractContent(article.description).slice(0, 647)}{' '}
          ...
        </p>
      </div>
    </a>
  )
}

export default Article
