import React from 'react'
import './section_create-security-token.less'
import RequestForm from 'src/components/requestForm'
import content from './content'

const CreateSecurityToken = ({ config }) => (
  <section className="section section_create-security-token">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section-big-attention">
          Create your Security Token
        </h2>
        <h4 className="title title_type_subtitle">
          No more wait! Start to raise funds in crypto industry.
        </h4>
      </header>
      <RequestForm content={content.contactForm} config={config.contactForm} />
    </div>
  </section>
)

export default CreateSecurityToken
