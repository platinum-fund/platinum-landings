import React from 'react'
import './section_team.less'
import Team from 'src/components/team'

const TeamSectionPure = () => (
  <section className="section_team">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">Our Star</h2>
        <h2 className="title title_type_section _orange">team</h2>
      </div>
      <Team />
      <button className="js-form-button button button_theme_main">
        Get consultation
      </button>
    </div>
  </section>
)

export default TeamSectionPure
