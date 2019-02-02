import React from 'react'
import '../page_business.less'
import Layout from 'src/components/layout/LayoutPure'
import PrefaceInvestment from 'src/components/sections/prefaceInvestment'
import WhyUs from 'src/components/sections/whyUs'

const IndexPage = () => (
  <Layout pageTitle="Platinum" language="en">
    <main className="page_security">
      <PrefaceInvestment />
      <WhyUs />
    </main>
  </Layout>
)

export default IndexPage
