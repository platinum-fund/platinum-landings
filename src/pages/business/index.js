import React from 'react'
import config from 'src/config/businessPage'
import './page_business.less'
import Layout from 'src/components/layout/LayoutPure'
import PrefaceInvestment from 'src/components/sections/prefaceInvestment'
import WhyUs from 'src/components/sections/whyUs'
import WhoWeAre from 'src/components/sections/whoWeAre'
import PlatinumBusiness from 'src/components/sections/platinumBusiness'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens'
import Reviews from 'src/components/sections/reviews'
import Articles from 'src/components/sections/articles'
import Team from 'src/components/sections/team'
import EmployeeFeedback from 'src/components/sections/employeeFeedback'
import Contacts from 'src/components/sections/contacts'
import MediumNews from 'src/components/sections/mediumNews'
import Footer from 'src/components/sections/footer'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_business">
      <PrefaceInvestment config={config} />
      <WhyUs />
      <WhoWeAre />
      <PlatinumBusiness config={config} />
      <EmployeeFeedback />
      <PastSupportedTokens />
      <Contacts />
      <Reviews />
      <Articles />
      <MediumNews />
      <Team />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
