import React from 'react'
import './page_ieo.less'
import config from 'src/config/ieoPage'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/ieo'
import MediaPreview from 'src/components/sections/mediaPreview'
import About from 'src/components/sections/about'
import PlatinumSlider from 'src/components/sections/about-slider'
import Team from 'src/components/sections/team'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens/sto'
import Share from 'src/components/sections/shareNow'
import Footer from 'src/components/sections/footer'
import Articles from 'src/components/sections/articles'
import Details from 'src/components/sections/details/ieo'
import ActionAttention from 'src/components/sections/actionAttention/ieo'
import Contacts from 'src/components/sections/contacts'
import ItTeam from 'src/components/sections/itTeam'
import EmployeesCompaniesHistory from 'src/components/sections/employeesCompaniesHistory'
import MediumNews from 'src/components/sections/mediumNews'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = ({ language = 'en' }) => (
  <Layout
    pageTitle="Services for IEO: Security Token Offering Consulting from Agency Platinum.fund"
    language={language}
    landingName={config.contactForm.landingName}
    locales={config.languages}
  >
    <main className="page_ieo">
      <Preface />
      <MediaPreview />
      <Contacts />
      <About />
      <PlatinumSlider />
      <Details />
      <ActionAttention />
      <Articles />
      <MediumNews />
      <Team />
      <ItTeam />
      <EmployeesCompaniesHistory />
      <PastSupportedTokens />
      <Share />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
