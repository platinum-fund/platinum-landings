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
import Popup from 'src/components/popup'
import Footer from 'src/components/sections/footer'
import OnePagerUsdqPdf from './content/onepager-usdq.pdf'

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
      <Popup
        popupId="onePageUsdq"
        content={
          <object
            data={OnePagerUsdqPdf}
            type="application/pdf"
            width="100%"
            height="100%"
            internalinstanceid="15"
          >
            <p>
              To view the menu, your browser must have an add-on to open the PDF
              and enable it. its launch. You can also{' '}
              <a href={OnePagerUsdqPdf} target="_blank">
                {' '}
                download menu file{' '}
              </a>
              and open it in a separate program.
            </p>
          </object>
        }
      />
      <Footer />
    </main>
  </Layout>
)

export default IndexPage
