import React from 'react'
import config from 'src/config/businessPage'
import './page_business.less'
import Layout from 'src/components/layout/LayoutPure'
import PrefaceInvestment from 'src/components/sections/prefaceInvestment'
import WhyUs from 'src/components/sections/whyUs'
import WhoWeAre from 'src/components/sections/whoWeAre'
import PlatinumBusiness from 'src/components/sections/platinumBusiness'
import PastSupportedTokens from 'src/components/sections/pastSupportedTokens'
import Reviews from 'src/components/sections/reviews'
import Articles from 'src/components/sections/articles'
import Team from 'src/components/sections/team'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_business">
      <PrefaceInvestment config={config} />
      <WhyUs />
      <WhoWeAre />
      <PlatinumBusiness config={config} />
      <PastSupportedTokens />
      <Reviews />
      <Articles />
      <Team />
    </main>
  </Layout>
)

export default IndexPage
