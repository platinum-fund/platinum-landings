import React from 'react'
import articles from './content'
import './stylesheets/articles.less'
import Article from './Article'

const Articles = props => (
  <div className="articles">
    {articles.map((article, i) => (
      <Article {...article} key={`article${i}`} />
    ))}
  </div>
)

export default Articles
