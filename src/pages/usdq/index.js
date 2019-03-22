import React from 'react'
import './page_usdq.less'
import config from 'src/config/usdqPage'
import Layout from 'src/components/layout/LayoutPure'
import WelcomeImage from 'src/components/sections/welcomeImage'
import StablecoinInfo from 'src/components/sections/stablecoinInfo'
import ListLogos from 'src/components/sections/listLogos'
import TextWithIcon from 'src/components/sections/textWithIcon'
import HowItWorkStableCoin from 'src/components/sections/howItWorkStableCoin'
import Roadmap from 'src/components/sections/roadmap'
import Footer from 'src/components/sections/footer'

const IndexPage = () => (
  <Layout
    pageTitle="USDQ decentralized stable trading asset collateralized by bitcoin"
    language="en"
  >
    <main className="page_usdq">
      <WelcomeImage />
      <StablecoinInfo />
      <ListLogos />
      <TextWithIcon />
      <HowItWorkStableCoin />
      <Roadmap />
      <Footer />
    </main>
  </Layout>
)

export default IndexPage
