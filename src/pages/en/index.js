import React from 'react'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/PrefacePure'
import BusinessGrowth from 'src/components/sections/businessGrowth/BusinessGrowthPure'
import StoAdvantages from 'src/components/sections/stoAdvantages/StoAdvantagesPure'
import SecuritiesServices from 'src/components/sections/securitiesServices/SecuritiesServicesPure'
import StoStandart from 'src/components/sections/stoStandart/StoStandartPure'
import LaunchSto from 'src/components/sections/launchSto/LaunchStoPure'
import CodeExample from 'src/components/sections/codeExample/CodeExamplePure'
import PlatinumEquivalency from 'src/components/sections/platinumEquivalency/PlatinumEquivalencyPure'

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
    </main>
  </Layout>
)

export default IndexPage
