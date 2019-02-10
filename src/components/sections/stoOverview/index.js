import React from 'react'
import './sto-overview.less'

const StoOverview = ({ contain }) => (
  <section className="section section_sto-overview" id="stooverview">
    <div className="wrapper _shrink">
      <div className="wrapper _content">
        <h2 className="title title_type_section">
          {contain.title_black}
          <span className="title title_section _orange">
            {contain.title_orange}
          </span>
          {contain.title_black2}
        </h2>
        <p className="section_description">{contain.describe}</p>
        <p className="section_description">
          <span className="section_description--bold">
            {contain.describe_word}
          </span>
          {contain.describe2}
          <span className="section_description--bold">
            {' '}
            {contain.describe_word2}{' '}
          </span>
          {contain.describe3}
        </p>
        <ul className="section__list theme_diamond">
          <li className="section__text">{contain.list1}</li>
          <li className="section__text">{contain.list2}</li>
          <li className="section__text">{contain.list3}</li>
          <li className="section__text">{contain.list4}</li>
        </ul>
      </div>
    </div>
  </section>
)

export default StoOverview
