import React from 'react'
import './stylesheets/article.less'

const Article = props => {
  const { date, image, title, text, source, sourcePage } = props

  return (
    <div className="article">
      <div className="article__header flex _aic _jcsb">
        <img className="article__header-image" src={image} />
        <p className="article__header-text">{date}</p>
      </div>
      <div className="article__main">
        <h4 className="article__main-title">{title}</h4>
        <p className="article__main-text">{text}</p>
        <a className="article__main-link" href={sourcePage} target="_blank">
          Read more &#x203A;
        </a>
      </div>
      <div className="article__footer">
        <img
          className="article__footer-image"
          src={require('src/images/icons/website.svg')}
        />
        <a className="article__footer-link" href={source} target="_blank">
          {source}
        </a>
      </div>
    </div>
  )
}

export default Article
