import React from 'react'
import './legal-sto.less'
import icon from '../../../images/favicon.png'

const LegalSto = ({ buttons }) => (
  <section className="section section_legal-sto">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Legal for STO is IMPORTANT</h2>
      </div>
      <p className="section_description">
        When conducting an STO, many factors must be considered. But one of the
        most important is the choice of jurisdiction.
      </p>
      <div className="wrapper_legalsto">
        <div className="wrapper_list">
          <h4 className="title-list">
            What influences the choice of jurisdiction:
          </h4>
          <ul className="list theme_diamond">
            <li className="section__text">
              Features of your project or its ideas
            </li>
            <li className="section__text">
              Level of legislative consolidation of the terms and rules <br />{' '}
              necessary for the STO project
            </li>
            <li className="section__text">Taxation rules</li>
            <li className="section__text">
              Rules on the publicity of the placement of security tokens
            </li>
            <li className="section__text">
              The need to conduct a legal analysis of the project
            </li>
          </ul>
        </div>
        <div className="wrapper_card">
          <h6 className="title_card">
            Legal is complicated, we would like to help you
          </h6>
          <div className="wrapper_buttons">
            <button className={buttons[0].className}>Get an invitation</button>
          </div>
          <img className="image_card" src={icon} />
        </div>
      </div>
    </div>
  </section>
)

export default LegalSto
