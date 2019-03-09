import React from 'react'
import './page_consulting.less'
import config from 'src/config/consultingPage'
import Layout from 'src/components/layout/LayoutPure'
import PrefaceNav from 'src/components/sections/prefaceNav'
import StoAdvantages from 'src/components/sections/stoAdvantages'
import FundingType from 'src/components/sections/fundingType'
import About from 'src/components/sections/about'
import PlatinumSlider from 'src/components/sections/about-slider'
import ServicesList from 'src/components/sections/servicesList'
import StoStandart from 'src/components/sections/stoStandart'
import StoOverview from 'src/components/sections/stoOverview'
import StoCategories from 'src/components/sections/stoCategories'
import ActionAttention from 'src/components/sections/actionAttention/sto'
import LegalSto from 'src/components/sections/legalSto'
import Fundraising from 'src/components/sections/fundraising'
import LaunchPLatform from 'src/components/sections/launchPlatform'
import Benefits from 'src/components/sections/benefits'
import Reviews from 'src/components/sections/reviews'
import Team from 'src/components/sections/team'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens/sto-consulting'
import Footer from 'src/components/sections/footer'
import Articles from 'src/components/sections/articles'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout
    pageTitle="Services for STO: Security Token Offering Consulting from Agency Platinum.fund"
    language="en"
  >
    <main className="page_consulting">
      <PrefaceNav />
      <StoOverview />
      <StoCategories />
      <StoAdvantages />
      <FundingType />
      <About />
      <PlatinumSlider />
      <ServicesList />
      <StoStandart />
      <ActionAttention />
      <LegalSto />
      <Fundraising />
      <LaunchPLatform />
      <Benefits />
      <Reviews />
      <Articles />
      <Team />
      <PastSupportedTokens />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
