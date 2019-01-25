import React from 'react'
import { Helmet } from 'react-helmet'
import 'src/common.blocks/index.less'

const LayoutPure = props => {
  const { pageTitle, children } = props

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  )
}

export default LayoutPure
