import React from 'react'
import './page_security.less'
import config from 'src/config/securityPage'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/security'
import BusinessGrowth from 'src/components/sections/details/security'
import StoAdvantages from 'src/components/sections/stoAdvantages'
import SecuritiesServices from 'src/components/sections/securitiesServices'
import StoStandart from 'src/components/sections/stoStandart'
import ActionAttention from 'src/components/sections/actionAttention/sto'
import CodeExample from 'src/components/sections/codeExample'
import PlatinumEquivalency from 'src/components/sections/platinumEquivalency'
import Reviews from 'src/components/sections/reviews'
import Team from 'src/components/sections/team'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens/sto'
import ServiceProviders from 'src/components/sections/serviceProviders'
import LastChance from 'src/components/sections/lastChance'
import Articles from 'src/components/sections/articles'
import CreateSecurityToken from 'src/components/sections/createSecurityToken'
import Share from 'src/components/sections/shareNow'
import Contacts from 'src/components/sections/contacts'
import MediumNews from 'src/components/sections/mediumNews'
import Footer from 'src/components/sections/footer'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout
    pageTitle="Services for STO: Security Token Offering Consulting from Agency Platinum.fund"
    language="en"
  >
    <main className="page_security">
      <Preface />
      <Contacts />
      <BusinessGrowth />
      <StoAdvantages />
      <CreateSecurityToken config={config} />
      <SecuritiesServices />
      <PlatinumEquivalency />
      <StoStandart />
      <ActionAttention />
      <CodeExample />
      <Team />
      <PastSupportedTokens />
      <ServiceProviders />
      <Reviews />
      <Articles />
      <MediumNews />
      <LastChance />
      <Share />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
