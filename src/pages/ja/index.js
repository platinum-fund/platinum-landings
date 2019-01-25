import React from 'react'
import Layout from 'src/components/layout/LayoutPure'
import Preface from 'src/components/sections/preface/PrefacePure'

const IndexPage = () => (
  <Layout pageTitle="STO" language="ja">
    <main>
      <Preface />
    </main>
  </Layout>
)

export default IndexPage
