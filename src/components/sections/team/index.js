import React from 'react'
import './section_team.less'
import Team from 'src/components/team'

const TeamSectionPure = () => (
  <section className="section section_team" id="platinum-team">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section">Our</h2>
        <h2 className="title title_type_section-attention">Team</h2>
      </header>
      <Team />
    </div>
  </section>
)

export default TeamSectionPure
