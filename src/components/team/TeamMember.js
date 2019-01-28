import React from 'react'

const TeamMember = props => {
  const { name, position, photo, socials } = props

  return (
    <div className="member">
      <img className="member__photo" src={photo} alt="member photo" />
      <h6 className="member__name">{name}</h6>
      <p className="member__position">{position}</p>
      <div className="member__socials">
        {socials.map((social, i) => (
          <a
            className="member__social"
            href={social.link}
            target="_blank"
            key={`teamMemberSocial${i}`}
          >
            <img className="icon" src={social.icon} alt="social link" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default TeamMember
