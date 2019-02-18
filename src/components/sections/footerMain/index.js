import React from 'react'
import './footer-main.less'
import google from '../../../images/section-footer-main/google.png'
import apple from '../../../images/section-footer-main/apple.png'

const FooterMain = () => (
  <section className="section_footer-main" id="faq">
    <div className="wrapper_shrink">
      <div className="wrapper_social-links">
        <div className="social_links">
          <p className="text _white">Follow us:</p>
          <div className="wrapper_links">
            <a
              className="service"
              href="https://t.me/platinumfund"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/telegram.svg')}
              />
            </a>
            <a
              className="service"
              href="https://medium.com/@PlatinumFund"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/medium.svg')}
              />
            </a>
            <a
              className="service"
              href="https://www.facebook.com/FundPlatinum"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/facebook.svg')}
              />
            </a>
            <a
              className="service"
              href="https://twitter.com/FundPlatinum"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/twitter.svg')}
              />
            </a>
            <a
              className="service"
              href="https://open.kakao.com/o/gmWcCnB"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <img
                className="service__img"
                src={require('src/images/icons/social/line.svg')}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="wrapper_footer">
        <div className="section_one">
          <div className="column-left">
            <h4 className="section-title">Services</h4>
            <div className="wrapper_content">
              <div className="content-title">
                <a
                  className="title-links"
                  href="https://platinum.fund/listing/"
                  target="_blank"
                >
                  <span>Exchanges listing</span>
                </a>
              </div>
              <div className="content-title">
                <a
                  className="title-links"
                  href="https://www.platinum.fund/marketmaking/"
                  target="_blank"
                >
                  <span>Market Making</span>
                </a>
              </div>
              <div className="content-title">
                <a
                  className="title-links"
                  href="https://www.platinum.fund/legal"
                  target="_blank"
                >
                  <span>ICO legal support</span>
                </a>
              </div>
              <div className="content-title">
                <a
                  className="title-links"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span>ICO start: leading tocken sale advisory</span>
                </a>
                <div className="group-links">
                  <a
                    className="group-link"
                    href="https://www.platinum.fund/ico-start/"
                    target="_blank"
                  >
                    <span className="text">Basic ICO Package</span>
                  </a>

                  <a
                    className="group-link"
                    href="https://www.platinum.fund/ico-start/#more-than-basic"
                    target="_blank"
                  >
                    <span className="text">Need more than basic?</span>
                  </a>

                  <a
                    className="group-link"
                    href="https://www.platinum.fund/ico-start/#more-than-basic"
                    target="_blank"
                  >
                    <span className="text">ICO PR &amp; Marketing</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a
                  className="title-links"
                  href="http://www.platinum.fund/ico-platform/"
                  target="_blank"
                >
                  <span>ICO launch platform & Dashboard</span>
                </a>

                <div className="group-links">
                  <a className="group-link" href="#" target="_blank">
                    <span className="text">Product Features</span>
                  </a>

                  <a
                    className="group-link"
                    href="https://platinum.fund/ico-platform/#token-buyer-account"
                    target="_blank"
                  >
                    <span className="text">
                      Token Buyer Account (Investor’s interface)
                    </span>
                  </a>

                  <a
                    className="group-link"
                    href="https://platinum.fund/ico-platform/#packages-pricing"
                    target="_blank"
                  >
                    <span className="text">ICO PR & Marketing</span>
                  </a>

                  <a
                    className="group-link"
                    href="https://platinum.fund/ico-platform/#ico-manager-account"
                    target="_blank"
                  >
                    <span className="text">
                      ICO Manager account (Admin Panel)
                    </span>
                  </a>

                  <a
                    className="group-link"
                    href="https://platinum.fund/ico-platform/#smart-contracts-audit"
                    target="_blank"
                  >
                    <span className="text">
                      Smart Contracts Creating & Audit
                    </span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Influencers account</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a
                  className="title-links"
                  href="https://platinum.fund/wallet/"
                  target="_blank"
                >
                  <span>Wallet</span>
                </a>
                <div className="group-links">
                  <a
                    className="group-link"
                    href="https://platinum.fund/wallet/"
                    target="_blank"
                  >
                    <span className="text">Login</span>
                  </a>
                  <a
                    className="group-link"
                    href="https://platinum.fund/wallet/"
                    target="_blank"
                  >
                    <span className="text">Crypto-Fiat, Coins & Tokens</span>
                  </a>
                  <a
                    className="group-link"
                    href="https://platinum.fund/wallet/portfolio.html"
                    target="_blank"
                  >
                    <span className="text">Portfolio</span>
                  </a>
                  <a
                    className="group-link"
                    href="https://platinum.fund/wallet/settings.html"
                    target="_blank"
                  >
                    <span className="text">Settings</span>
                  </a>
                  <a
                    className="group-link"
                    href="https://platinum.fund/wallet/"
                    target="_blank"
                  >
                    <span className="text">About Wallet & White Label</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a
                  className="title-links"
                  href="https://platinum.fund/wallet/"
                  target="_blank"
                >
                  <span>Landing</span>
                </a>
                <div className="group-links">
                  <a
                    className="group-link"
                    href="https://play.google.com/store/apps/details?id=mm.com.money&hl=en"
                    target="_blank"
                  >
                    <span className="text">
                      Crypto-Fiat loans for daily needs — Google play app
                    </span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Crypto-backed loans</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Installment Loans</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>SME Loans</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a
                  className="title-links"
                  href="https://www.ubai.co/"
                  target="_blank"
                >
                  <span>University of Blockchain and ICO</span>
                </a>

                <div className="group-links">
                  <a
                    className="group-link"
                    href="https://www.ubai.co/learning-paths/kFK3pzMxacWeRE7vD/courses/jCA69zRKwgq8yAoon"
                    target="_blank"
                  >
                    <span className="text">Start free lesson</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Basic course</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Intermediate course</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Advanced courses</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="column-right">
            <h4 className="section-title">Future Services</h4>
            <div className="wrapper_content">
              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Marketplace B2B, B2C</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Become a member</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Merchant list</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>P2P Exchange</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>P2P Exchange & Lending</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>API for Exchanges</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>CoinBrowser: 10000+ Coins List</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Browse 10000+ Icos, Tokens & Coins</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>ICO Marketplace</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Add new ICO: elevators pitch + team + FAQ</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>ICO Analytics Agency / ICO Rating</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Outsourcing & Outstaffing</span>
                </a>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Advisory Marketplace</span>
                </a>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>MLM: Binary & Linear</span>
                </a>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>CRM + ERP</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>CRM for Investors management</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>ERP</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>News & RSS agregator</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Admin platform for RSS channels</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Crypto fund $100M</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Become a Member</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Apply for Finance</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>About Fund</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Fund Policies</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Investing to Real Estate at Emerging Markets</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>FAQ</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>FAQ about micromoney</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>FAQ about Wallet</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>FAQ about services</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>FAQ for each onboard ICO project</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Referral + Affiliate + MLM</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Referral System for Users</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Referral System admin-panel</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Referral System income calculator</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Bounty</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Bounty for Users</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Bounty admin-panel for ICO owner</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>ICO Accelerator</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>ICO accelerator</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Startup incubator</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Support</span>
                </a>
                <div className="group-links">
                  <a className="group-link-inactive">
                    <span>Make a ticket</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Check your ticket</span>
                  </a>
                  <a className="group-link-inactive">
                    <span>Improve your favorite wallet!</span>
                  </a>
                </div>
              </div>

              <div className="content-title">
                <a className="title-links _inactive">
                  <span>Affiliate for webmaster / CPA network</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_two">
        <div className="column_button">
          <h4 className="section-title">About platinum</h4>
          <div className="wrapper_content">
            <div className="content-title">
              <div className="group-links">
                <a className="group-link-inactive">
                  <span>
                    AMM token distribution company, Global Gateway 8, Rue de la
                    Perle, Providence, Mahe, Seychelles
                  </span>
                </a>
              </div>
            </div>

            <div className="content-title">
              <a className="title-links" href="#" target="_blank">
                <span>About Micromoney</span>
              </a>
              <div className="group-links">
                <a className="group-link" href="#" target="_blank">
                  <span className="text">Expert review</span>
                </a>

                <a className="group-link" href="#" target="_blank">
                  <span className="text">Press</span>
                </a>

                <a className="group-link" href="#" target="_blank">
                  <span className="text">
                    MicroMoney has been saving thousands of lives
                  </span>
                </a>

                <a className="group-link" href="#" target="_blank">
                  <span className="text">Internal Documents</span>
                </a>

                <a className="group-link" href="#" target="_blank">
                  <span className="text">Buy now AMM tokens</span>
                </a>

                <a className="group-link" href="#" target="_blank">
                  <span className="text">Team & Organizational chart</span>
                </a>
              </div>
            </div>

            <div className="content-title">
              <div className="group-links">
                <a className="group-link" href="#" target="_blank">
                  <span className="text">
                    Download our app with Crypto-Fiat loans for daily needs
                  </span>
                </a>
                <a
                  className="image-link"
                  href="https://play.google.com/store/apps/details?id=mm.com.money"
                  target="_blank"
                >
                  <img src={google} />
                </a>
                <a className="image-link" href="">
                  <img src={apple} />
                </a>
              </div>
            </div>

            <div className="content-title">
              <a
                className="title-links"
                href="https://platinum.fund/hr/"
                target="_blank"
              >
                <span>We are hiring</span>
              </a>
              <div className="group-links">
                <a
                  className="group-link"
                  href="https://platinum.fund/hr/"
                  target="_blank"
                >
                  <span className="text">Blockchain developers</span>
                </a>
                <a
                  className="group-link"
                  href="https://platinum.fund/hr/"
                  target="_blank"
                >
                  <span className="text">Full Stack developers</span>
                </a>
                <a
                  className="group-link"
                  href="https://platinum.fund/hr/"
                  target="_blank"
                >
                  <span className="text">Copirighters</span>
                </a>
                <a
                  className="group-link"
                  href="https://platinum.fund/hr/"
                  target="_blank"
                >
                  <span className="text">Sales </span>
                </a>
              </div>
            </div>

            <div className="content-title">
              <div className="group-links">
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Legal companies</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Terms and Conditions</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Copirighters</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Privacy Policy</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Risk Warnings</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">Disclaimers</span>
                </a>
                <a
                  className="group-link"
                  href="https://www.platinum.fund/ico-start/"
                  target="_blank"
                >
                  <span className="text">About Trademarks</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FooterMain
