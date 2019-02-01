import React from 'react'
import './section_articles.less'
import Articles from 'src/components/articles'

const ArticlesSection = () => (
  <section className="section_articles">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section _orange">Platinum</h2>
        <h2 className="title title_type_section">articles</h2>
      </div>
      <Articles />
    </div>
  </section>
)

export default ArticlesSection
