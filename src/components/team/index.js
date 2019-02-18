import React from 'react'
import TeamMember from './TeamMember'
import teamList from './content'
import './stylesheets/team.less'
import './stylesheets/member/member.less'
import './stylesheets/member/__name/member__name.less'
import './stylesheets/member/__photo/member__photo.less'
import './stylesheets/member/__position/member__position.less'
import './stylesheets/member/__social/member__social.less'
import './stylesheets/member/__socials/member__socials.less'

const Team = props => (
  <div className="team" id="team">
    {teamList.map((teamMember, i) => (
      <TeamMember {...teamMember} key={`teamMember${i}`} />
    ))}
  </div>
)

export default Team
