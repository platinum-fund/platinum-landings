import React from 'react'
import '../../marketmaking/page_market-making.less'
import config from 'src/config/marketmakingPage'
import Layout from 'src/components/layout/LayoutPure'
import MarketMakingSlider from 'src/components/sections/marketMakingSlider'
import DescriptionWithDocuments from 'src/components/sections/descriptionWithDocuments'
import TokenToTheMoon from 'src/components/sections/tokenToTheMoon'
import WhyLiquidityMatters from 'src/components/sections/whyLiquidityMatters'
import MarketMakingPrices from 'src/components/sections/marketMakingPrices'
import Team from 'src/components/sections/team'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens/sto'
import Share from 'src/components/sections/shareNow'
import Reviews from 'src/components/sections/reviews'
import Contacts from 'src/components/sections/contacts'
import Footer from 'src/components/sections/footer'
import Articles from 'src/components/sections/articles'
import MediaPreview from 'src/components/sections/mediaPreview'
import ContactForm from 'src/components/contactFormPopup'

const IndexPage = () => (
  <Layout
    pageTitle="Market Making and Liquidity Management on Crypto Exchanges | Platinum.fund"
    language="ja"
    landingName={config.contactForm.landingName}
    locales={config.languages}
  >
    <main className="page_market-making">
      <MarketMakingSlider />
      <MediaPreview />
      <DescriptionWithDocuments />
      <TokenToTheMoon />
      <WhyLiquidityMatters />
      <MarketMakingPrices />
      <Team />
      <PastSupportedTokens />
      <Reviews />
      <Articles />
      <Contacts />
      <Share />
      <Footer />
      <ContactForm config={config.contactForm} />
    </main>
  </Layout>
)

export default IndexPage
