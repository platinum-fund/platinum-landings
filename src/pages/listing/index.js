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
import Footer from 'src/components/sections/footer'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = props => {
  return (
    <Layout
      pageTitle="Listing on Crypto Exchanges | Platinum.fund"
      language={props.language ? props.language : 'en'}
      landingName={config.contactForm.landingName}
      locales={config.languages}
    >
      <main className="page_listing">
        <Preface />
        <MediaPreview />
        <ListingSuccessful />
        <ListingExchanges />
        <ListingClients />
        <ListingExtra />
        <ListingPrices />
        <Reviews />
        <Team />
        <PastSupportedTokens />
        <Share />
        <Footer />
        <ContactForm config={config.contactForm} />
      </main>
    </Layout>
  )
}

export default IndexPage
