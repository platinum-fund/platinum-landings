import React from 'react'
import './page_zmest.less'
import config from 'src/config/zmestPage'
import Layout from 'src/components/layout/LayoutPure'
import Team from 'src/components/sections/team'
import Reviews from 'src/components/sections/reviews'
import handleClick from '../../components/pages/zmest/handleSendEmailClick.js'
import Footer from 'src/components/sections/footer'
import translations from '../../components/pages/zmest/translations'
import TranslationProvider from '../../components/translationProvider'
import { FormattedHTMLMessage } from 'react-intl'

const IndexPage = () => (
  <Layout
    pageTitle="ICO \ STO Marketing Consulting: Get Free Consultation | Platinum.fund"
    description="Marketing services for ICO and STO projects. We provide consulting services for a long time and have already conducted more than 100 successful STO and ICO companies. Get a free consultation right now."
    language="en"
    landingName={config.contactForm.landingName}
    locales={config.languages}
  >
    <TranslationProvider translations={translations}>
      <main className="page_zmest">
        <div className="banner section-anchor" id="main">
          <div className="banner-bg" />
          <div className="overlay" />
          <div className="container">
            <p className="lead">Zmest Marketing Group</p>
            <h1>GET FREE ICO PR&MARKETING CONSULTANCY NOW!</h1>
            <p>
              <FormattedHTMLMessage id="prefaceSubtitle" />
            </p>
          </div>
          <div className="mouse-down" />
        </div>
        <div className="section section-anchor" id="about">
          <div className="container">
            <h2>
              <FormattedHTMLMessage id="aboutTitle" />
            </h2>
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <p className="text-center">
                  <FormattedHTMLMessage id="aboutSubtitle" />
                </p>
              </div>
            </div>
            <img
              className="img-responsive"
              id="we-do-image"
              src={require('../../components/pages/zmest/content/images/who-we-are.png')}
            />
          </div>
        </div>
        <div className="section section-anchor services" id="services">
          <div className="container">
            <h2>
              <FormattedHTMLMessage id="servicesTitle" />
            </h2>
            <div className="row">
              <div className="col-md-4 service-block">
                <img
                  src={require('../../components/pages/zmest/content/images/listings.png')}
                />
                <span>
                  {' '}
                  <FormattedHTMLMessage id="icoListings" />{' '}
                </span>
                <div className="service-block-overlay">
                  <h3>
                    <FormattedHTMLMessage id="icoListings" />
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="icoListingsDescription" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 service-block">
                <img
                  src={require('../../components/pages/zmest/content/images/media_buying.png')}
                />
                <span>
                  {' '}
                  <FormattedHTMLMessage id="mediaBuying" />{' '}
                </span>
                <div className="service-block-overlay">
                  <h3>
                    <FormattedHTMLMessage id="mediaBuying" />
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="mediaBuyingDescription" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 service-block -last">
                <img
                  src={require('../../components/pages/zmest/content/images/community.png')}
                />
                <span>
                  <FormattedHTMLMessage id="communityManagement" />
                </span>
                <div className="service-block-overlay">
                  <h3>
                    <FormattedHTMLMessage id="communityManagement" />
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="communityManagementDescription" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 service-block -bottom">
                <img
                  src={require('../../components/pages/zmest/content/images/pr.png')}
                />{' '}
                <span>
                  {' '}
                  <FormattedHTMLMessage id="pr" />{' '}
                </span>
                <div className="service-block-overlay">
                  <h3>
                    {' '}
                    <FormattedHTMLMessage id="pr" />{' '}
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="prDescription" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 service-block -bottom">
                <img
                  src={require('../../components/pages/zmest/content/images/bounty.png')}
                />
                <span>
                  <FormattedHTMLMessage id="bountyCampaignManagement" />
                </span>
                <div className="service-block-overlay">
                  <h3>
                    <FormattedHTMLMessage id="bountyCampaignManagement" />
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="bountyCampaignManagementDescription" />
                  </p>
                </div>
              </div>
              <div className="col-md-4 service-block -bottom -last">
                <img
                  src={require('../../components/pages/zmest/content/images/traffic.png')}
                />
                <span>
                  <FormattedHTMLMessage id="trafficAcquisition" />
                </span>
                <div className="service-block-overlay">
                  <h3>
                    <FormattedHTMLMessage id="trafficAcquisition" />
                  </h3>
                  <p>
                    <FormattedHTMLMessage id="trafficAcquisitionDescription" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-anchor about" id="about-us">
          <div className="overlay" />
          <div className="container">
            <h2>
              <FormattedHTMLMessage id="aboutUsTitle" />
            </h2>
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <p>
                  <FormattedHTMLMessage id="aboutUsSubtitle" />
                </p>
              </div>
            </div>
            <div className="row rounds">
              <div className="col-lg-3 col-sm-6">
                <div className="round">
                  <span>7+</span>
                  <p>
                    <FormattedHTMLMessage id="aboutUsPrExperience" />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="round">
                  <span>9+</span>
                  <p>
                    <FormattedHTMLMessage id="aboutUsDigitalMarketingExperience" />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="round">
                  <span>20+</span>
                  <p>
                    <FormattedHTMLMessage id="aboutUsMarketingExperience" />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="round">
                  <span>>11</span>
                  <p>
                    <FormattedHTMLMessage id="aboutUsMlnFundsRaised" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-anchor cases" id="work">
          <div className="container">
            <h2>
              {' '}
              <FormattedHTMLMessage id="businessCasesTitle" />{' '}
            </h2>
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <p className="text-center">
                  <FormattedHTMLMessage id="businessCasesSubtitle" />
                </p>
              </div>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="title">IMMLA</div>
                <p>
                  Pre-ICO,
                  <span>
                    <FormattedHTMLMessage id="businessCaseImmlaDate" />
                  </span>
                  <br />
                  <span>
                    <FormattedHTMLMessage id="businessCaseImmlaRaise" />
                  </span>
                </p>
                <img
                  src={require('../../components/pages/zmest/content/images/immla-white.png')}
                />
              </div>
              <div className="item">
                <div className="title">CopPay</div>
                <p>
                  Pre-ICO,
                  <span>
                    <FormattedHTMLMessage id="businessCaseCopPayDate" />
                  </span>
                  <br />
                  <span>
                    <FormattedHTMLMessage id="businessCaseCopPayRaise" />
                  </span>
                </p>
                <img
                  src={require('../../components/pages/zmest/content/images/coppay-white.png')}
                />
              </div>
              <div className="item">
                <div className="title">Micromoney</div>
                <p>
                  ICO,
                  <span>
                    <FormattedHTMLMessage id="businessCaseMicroMoneyDate" />
                  </span>
                  <br />
                  <span>
                    <FormattedHTMLMessage id="businessCaseMicroMoneyRaise" />
                  </span>
                </p>
                <img
                  src={require('../../components/pages/zmest/content/images/micromoney-white.png')}
                />
              </div>
            </div>
          </div>
        </div>
        <Reviews />
        <div className="section section-anchor contact" id="contact">
          <div className="overlay" />
          <div className="container">
            <h2>
              <FormattedHTMLMessage id="contactTitle" />
            </h2>
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <form
                  id="get-in-touch"
                  name="send-email-form"
                  onSubmit={handleClick}
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="3"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-default"
                      type="submit"
                      name="submit"
                    >
                      <span className="js-send-button-default">
                        <FormattedHTMLMessage id="sendButton" />
                      </span>
                      <span className="js-send-button-success">
                        <FormattedHTMLMessage id="sendButtonSuccess" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Team />
        <div className="section footer">
          <div className="container text-center">
            <img
              src={require('../../components/pages/zmest/content/images/logo-white.png')}
              width="90"
            />
            <p>Zmest Marketing Group</p>
            <ul className="list-inline mail">
              <li>
                <a href="mailto:info@zmest.io">info@zmest.io</a>
              </li>
              <li>
                <a href="mailto:pr@zmest.io">pr@zmest.io</a>
              </li>
            </ul>
            <ul className="list-inline social">
              <li>
                <a href="https://www.facebook.com/zmest/" className="facebook">
                  <img
                    src={require('../../components/pages/zmest/content/images/facebook-logo.svg')}
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/zmest/"
                  className="linkedin"
                >
                  <img
                    src={require('../../components/pages/zmest/content/images/linkedin-logo.svg')}
                    alt="facebook"
                  />
                </a>
              </li>
            </ul>

            <div className="copyright">
              © 2018 Zmest Marketing Group. All rights reserved.
            </div>
          </div>
        </div>
      </main>
    </TranslationProvider>
    <Footer />
  </Layout>
)

export default IndexPage
