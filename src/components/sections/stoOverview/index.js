import React from 'react'
import './sto-overview.less'

const StoOverview = ({ contain }) => (
  <section className="section section_sto-overview">
    <div className="wrapper_shrink">
      <div className="wrapper_content">
        <h2 className="title title_type_section">
          {contain.title_black}
          <span className="title title_type_section _orange">
            {contain.title_orange}
          </span>
        </h2>
        <p className="text fz-15 _light-gray">{contain.describe}</p>
        <p className="text fz-15 _light-gray">{contain.describe2}</p>
        <ul className="list _theme_diamond">
          <li className="text fz-20 _dark-gray">{contain.list1}</li>
          <li className="text fz-20 _dark-gray">{contain.list2}</li>
          <li className="text fz-20 _dark-gray">{contain.list3}</li>
          <li className="text fz-20 _dark-gray">{contain.list4}</li>
        </ul>
      </div>
      <div className="wrapper_image">
        <img className="article__header-image" src={contain.image} />
      </div>
    </div>
  </section>
)

export default StoOverview
