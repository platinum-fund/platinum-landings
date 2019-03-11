import React from 'react'
import './section_team.less'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/project-team')
}

const TeamSectionPure = () => (
  <section className="section section_team" id="platinum-team">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section">Our</h2>
        <h2 className="title title_type_section-attention">Team</h2>
      </header>
      <project-team />
    </div>
  </section>
)

export default TeamSectionPure
