import React from 'react'
import './section_team.less'
import Team from 'src/components/team'

const TeamSectionPure = () => (
  <section className="section _team">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section">Our Star</h2>
        <h2 className="title _type_section _orange">team</h2>
      </div>
      <Team />
      <button className="button _size_50 _theme_orange">
        Get consultation
      </button>
    </div>
  </section>
)

export default TeamSectionPure
