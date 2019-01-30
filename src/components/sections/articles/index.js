import React from 'react'
import './section_articles.less'
import Articles from 'src/components/articles'

const ArticlesSection = () => (
  <section className="section _articles">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section _orange">Platinum</h2>
        <h2 className="title _type_section">articles</h2>
      </div>
      <Articles />
    </div>
  </section>
)

export default ArticlesSection
