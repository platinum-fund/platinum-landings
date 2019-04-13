import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'

const content = {
  sectionsNavbar: {
    links: [
      {
        name: <FormattedHTMLMessage id="aboutPlatinum" />,
        href: '#section-about'
      },
      {
        name: <FormattedHTMLMessage id="iEOInDetails" />,
        href: '#section-details-ieo'
      },
      {
        name: <FormattedHTMLMessage id="findUsInMedia" />,
        href: '#media'
      },
      {
        name: <FormattedHTMLMessage id="ourTeam" />,
        href: '#platinum-team'
      },
      {
        name: <FormattedHTMLMessage id="startYourIEO" />,
        href: '#action-attention-ieo'
      }
    ]
  }
}

export default content
