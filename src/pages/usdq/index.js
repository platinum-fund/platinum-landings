import React from 'react'
import './page_usdq.less'
import config from 'src/config/usdqPage'
import Layout from 'src/components/layout/LayoutPure'
import WelcomeImage from 'src/components/sections/welcomeImage'
import Footer from 'src/components/sections/footer'

const IndexPage = () => (
  <Layout
    pageTitle="USDQ decentralized stable trading asset collateralized by bitcoin"
    language="en"
  >
    <main className="page_usdq">
      <WelcomeImage />
      <Footer />
    </main>
  </Layout>
)

export default IndexPage
