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
import ContactForm from 'src/components/contactFormPopup'


const IndexPage = () => (
  <Layout
    pageTitle="Services for IEO: Security Token Offering Consulting from Agency Platinum.fund"
    language="en"
  >
    <main className="page_ieo">
      <Preface />
      <MediaPreview />
      <About />
      <PlatinumSlider />
      <Details />
      <ActionAttention />
      <Articles />
      <Team />
      <PastSupportedTokens />
      <Share />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
