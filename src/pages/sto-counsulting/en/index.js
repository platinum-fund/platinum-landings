import React from 'react'
import '../page_security.less'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface'
import header from 'src/components/sections/preface/content/index'
import buttons from 'src/components/sections/preface/buttons'
import BusinessGrowth from 'src/components/sections/businessGrowth'
import StoAdvantages from 'src/components/sections/stoAdvantages'
import SecuritiesServices from 'src/components/sections/securitiesServices'
import StoStandart from 'src/components/sections/stoStandart'
import StoOverview from 'src/components/sections/stoOverview'
import contain from 'src/components/sections/stoOverview/content/index'
import LaunchSto from 'src/components/sections/launchSto'
import CodeExample from 'src/components/sections/codeExample'
import PlatinumEquivalency from 'src/components/sections/platinumEquivalency'
import Reviews from 'src/components/sections/reviews'
import Team from 'src/components/sections/team'
import ServiceProviders from 'src/components/sections/serviceProviders'
import Articles from 'src/components/sections/articles'
import Footer from 'src/components/sections/footer'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout
    pageTitle="Services for STO: Security Token Offering Consulting from Agency Platinum.fund"
    language="en"
  >
    <main className="page_security">
      <Preface header={header['sto']} buttons={buttons} />
      <StoOverview contain={contain} />
      <StoAdvantages />
      <SecuritiesServices />
      <PlatinumEquivalency />
      <StoStandart />
      <LaunchSto />
      <CodeExample />
      <ServiceProviders />
      <Reviews />
      <BusinessGrowth />
      <Articles />
      <Team />
      <Footer />
      <ContactForm />
    </main>
  </Layout>
)

export default IndexPage
