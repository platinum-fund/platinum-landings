import React from 'react'
import './section_articles.less'
import Articles from 'src/components/articles'

const ArticlesSection = () => (
  <section className="section section_articles" id="media">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">FIND US IN</h2>
        <h2 className="title title_type_section _orange">MEDIA</h2>
      </div>
      <Articles />
    </div>
  </section>
)

export default ArticlesSection
