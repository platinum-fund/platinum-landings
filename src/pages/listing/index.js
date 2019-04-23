import React from 'react'
import './page_listing.less'
import config from 'src/config/listingPage'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/listing'
import MediaPreview from 'src/components/sections/mediaPreview'
import ListingSuccessful from 'src/components/sections/listing/successful'
import ListingExchanges from 'src/components/sections/listing/exchanges'
import ListingClients from 'src/components/sections/listing/clients'
import ListingExtra from 'src/components/sections/listing/extra'
import ListingPrices from 'src/components/sections/listing/prices'
import Reviews from 'src/components/sections/reviews'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens/sto'
import Team from 'src/components/sections/team'
import Share from 'src/components/sections/shareNow'
import Contacts from 'src/components/sections/contacts'
import Articles from 'src/components/sections/articles'
import MediumNews from 'src/components/sections/mediumNews'
import ItTeam from 'src/components/sections/itTeam'
import EmployeesCompaniesHistory from 'src/components/sections/employeesCompaniesHistory'
import Footer from 'src/components/sections/footer'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = ({ language = 'en' }) => {
  return (
    <Layout
      pageTitle="Listing on Crypto Exchanges | Platinum.fund"
      language={language}
      landingName={config.contactForm.landingName}
      locales={config.languages}
    >
      <main className="page_listing">
        <Preface />
        <MediaPreview />
        <Contacts />
        <ListingSuccessful />
        <ListingExchanges />
        <ListingClients />
        <ListingExtra />
        <ListingPrices />
        <Reviews />
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
}

export default IndexPage
