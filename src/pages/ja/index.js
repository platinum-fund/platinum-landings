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

const IndexPage = () => (
  <Layout pageTitle="STO" language="ja">
    <main>
      <Preface />
      <BusinessGrowth />
      <StoAdvantages />
      <SecuritiesServices />
      <PlatinumEquivalency />
      <StoStandart />
      <LaunchSto />
      <CodeExample />
      <Reviews />
    </main>
  </Layout>
)

export default IndexPage
