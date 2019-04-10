import React from 'react'
import './medium-news.less'
import Article from './Article'

const MediumNewsPure = ({ feed, isLoading, error }) => (
  <div className="medium-news">
    {feed.length && feed.map(item => <Article article={item} />)}
  </div>
)

export default MediumNewsPure
