import React from 'react'
import 'src/components/error/error.less'
import config from 'src/config/503Page'
import Layout from 'src/components/layout/LayoutPure'

const ServiceUnavailablePage = ({ language = 'en' }) => (
  <Layout
    pageTitle="503 Service Unavailable. Please try again later."
    language={language}
    landingName={config.contactForm.landingName}
    locales={config.languages}
  >
    <section className="error">
      <header>
        <h2 className="error__title">503</h2>
      </header>
      <h3 className="error__subtitle">
        Service Unavailable. Please try again later.
      </h3>
    </section>
  </Layout>
)

export default ServiceUnavailablePage
