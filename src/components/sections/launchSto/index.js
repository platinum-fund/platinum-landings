import React from 'react'
import './section_launch-sto.less'

const LaunchStoPure = () => (
  <section className="section_launch-sto">
    <div className="wrapper_shrink">
      <div className="headline">
        <h2 className="title title_type_section">
          Launch Securities Tokens in Minutes
        </h2>
      </div>
      <p className="description">
        A Security Token is a free, open standard that describes how to build
        transfer restricted securities tokens on the Ethereum blockchain. While
        most tokens have no limitations on who can receive, or participate in
        the token sale, the Security Token restricts token transfers to verified
        investors only.
      </p>
      <button
        className="js-form-button button button_theme_light-white"
        id="legal"
      >
        Launch SECURITY TOKEN
      </button>
    </div>
  </section>
)

export default LaunchStoPure
