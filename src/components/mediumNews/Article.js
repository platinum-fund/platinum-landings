import React from 'react'
import './medium-article.less'
import platinumLogo from 'src/images/favicon.png'
import extractContent from 'src/utils/extractContent'

const Article = ({ article }) => (
  <article className="medium-article">
    <div className="medium-article__cover-wrapper">
      <img className="medium-article__cover" src={article.thumbnail} />
    </div>
    <header className="medium-article__header">
      <img className="medium-article__author-logo" src={platinumLogo} />
      <div className="medium-article__info">
        <p className="medium-article__author-name">PLATINUM</p>
        <p className="medium-article__date">{article.pubDate}</p>
      </div>
    </header>
    <div className="medium-article__body">
      <h6 className="medium-article__title">{article.title}</h6>
      <p className="medium-article__description">
        {extractContent(article.description).slice(0, 190)} ...
      </p>
    </div>
  </article>
)

export default Article
