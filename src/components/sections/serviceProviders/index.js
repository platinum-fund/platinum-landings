import React from 'react'
import './section_service-providers.less'

const ServiceProviders = props => (
  <section className="section _service-providers">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section">Service</h2>
        <h2 className="title _type_section _orange">Providers</h2>
        <h4 className="title _type_subtitle">
          Do you provide services to companies that are raising capital and
          issuing securities?
        </h4>
      </div>
      <div className="service-providers">
        <img
          className="image"
          src={require('src/images/section-service-providers/service-providers.png')}
        />
      </div>
    </div>
  </section>
)

export default ServiceProviders
