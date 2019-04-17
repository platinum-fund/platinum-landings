import React from 'react'
import 'src/components/error/error.less'
import config from 'src/config/404Page'
import Layout from 'src/components/layout/LayoutPure'

const NotFoundPage = ({ language = 'en' }) => (
  <Layout
    pageTitle="404 Platinum.fund Sorry, page not found."
    language={language}
    landingName={config.contactForm.landingName}
    locales={config.languages}
  >
    <section className="error">
      <header>
        <h2 className="error__title">404</h2>
      </header>
      <h3 className="error__subtitle">Sorry, page not found.</h3>
      <a className="error__button" href="/">
        home page
      </a>
    </section>
  </Layout>
)

export default NotFoundPage
