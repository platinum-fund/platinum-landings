import React from 'react'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface'
import BusinessGrowth from 'src/components/sections/businessGrowth'
import StoAdvantages from 'src/components/sections/stoAdvantages'
import SecuritiesServices from 'src/components/sections/securitiesServices'
import StoStandart from 'src/components/sections/stoStandart'
import LaunchSto from 'src/components/sections/launchSto'
import CodeExample from 'src/components/sections/codeExample'
import PlatinumEquivalency from 'src/components/sections/platinumEquivalency'
import Reviews from 'src/components/sections/reviews'
import Team from 'src/components/sections/team'
import ServiceProviders from 'src/components/sections/serviceProviders'
import LastChance from 'src/components/sections/lastChance'

const IndexPage = () => (
  <Layout pageTitle="STO" language="en">
    <main>
      <Preface />
      <BusinessGrowth />
      <StoAdvantages />
      <SecuritiesServices />
      <PlatinumEquivalency />
      <StoStandart />
      <LaunchSto />
      <CodeExample />
      <Team />
      <ServiceProviders />
      <Reviews />
      <LastChance />
    </main>
  </Layout>
)

export default IndexPage
