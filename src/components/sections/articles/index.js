import React from 'react'
import './section_articles.less'
import Articles from 'src/components/articles'

const ArticlesSection = () => (
  <section className="section section_articles">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section-attention">Platinum</h2>
        <h2 className="title title_type_section">articles</h2>
      </header>
      <Articles />
    </div>
  </section>
)

export default ArticlesSection
