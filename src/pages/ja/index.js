import React from 'react'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/PrefacePure'
import BusinessGrowth from 'src/components/sections/businessGrowth/BusinessGrowthPure'
import StoAdvantages from 'src/components/sections/stoAdvantages/StoAdvantagesPure'
import SecuritiesServices from 'src/components/sections/securitiesServices/SecuritiesServicesPure'
import StoStandart from 'src/components/sections/stoStandart/StoStandartPure'
import LaunchSto from 'src/components/sections/launchSto/LaunchStoPure'
import CodeExample from 'src/components/sections/codeExample/CodeExamplePure'

const IndexPage = () => (
  <Layout pageTitle="STO" language="ja">
    <main>
      <Preface />
      <BusinessGrowth />
      <StoAdvantages />
      <SecuritiesServices />
      <StoStandart />
      <LaunchSto />
      <CodeExample />
    </main>
  </Layout>
)

export default IndexPage
