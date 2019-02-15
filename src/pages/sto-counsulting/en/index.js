import React from 'react'
import '../page_security.less'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface'
import header from 'src/components/sections/preface/content/index'
import buttons from 'src/components/sections/preface/buttons'
import StoAdvantages from 'src/components/sections/stoAdvantages'
import FundingType from 'src/components/sections/fundingType'
import About from 'src/components/sections/about'
import PlatinumSlider from 'src/components/sections/about-slider'
import ServicesList from 'src/components/sections/servicesList'
import StoStandart from 'src/components/sections/stoStandart'
import StoOverview from 'src/components/sections/stoOverview'
import contain from 'src/components/sections/stoOverview/content/index'
import StoCategories from 'src/components/sections/stoCategories'
import text from 'src/components/sections/stoCategories/text/index'
import LaunchSto from 'src/components/sections/launchSto'
import LegalSto from 'src/components/sections/legalSto'
import Fundraising from 'src/components/sections/fundraising'
import LaunchPLatform from 'src/components/sections/launchPlatform'
import Benefits from 'src/components/sections/benefits'
import Reviews from 'src/components/sections/reviews'
import Team from 'src/components/sections/team'
import FooterMain from 'src/components/sections/footerMain'
import Articles from 'src/components/sections/articles'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout
    pageTitle="Services for STO: Security Token Offering Consulting from Agency Platinum.fund"
    language="en"
  >
    <main className="page_security">
      <Preface header={header['sto']} buttons={buttons} />
      <StoOverview contain={contain['sto']} />
      <StoCategories text={text} />
      <StoAdvantages />
      <FundingType buttons={buttons} />
      <About />
      <PlatinumSlider />
      <ServicesList buttons={buttons} />
      <StoStandart />
      <LaunchSto />
      <LegalSto buttons={buttons} />
      <Fundraising buttons={buttons} />
      <LaunchPLatform buttons={buttons} />
      <Benefits />
      <Reviews contain={contain['title']} />
      <Articles contain={contain['article']} />
      <Team />
      <FooterMain />
      <ContactForm />
    </main>
  </Layout>
)

export default IndexPage