import React from 'react'
import './legal-sto.less'
import icon from '../../../images/favicon.png'

const LegalSto = ({ buttons }) => (
  <section className="section section_legal-sto">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Legal for STO is IMPORTANT</h2>
        <h4 className="title title_type_subtitle">
          When conducting an STO, many factors must be considered. But one of
          the most important is the choice of jurisdiction.
        </h4>
      </div>
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
            <button className="js-form-button button button_theme_main">
              Free consultation!
            </button>
          </div>
          <img className="image_card" src={icon} />
        </div>
      </div>
    </div>
  </section>
)

export default LegalSto
