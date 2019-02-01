import React from 'react'
import './section_code-example.less'
import example1Image from 'src/images/section-code-example/example1.png'
import example2Image from 'src/images/section-code-example/example2.png'

const CodeExamplePure = () => (
  <section className="section_code-example">
    <div className="wrapper_shrink">
      <div className="wrapper_cards">
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={example1Image} />
          <div className="card__row">
            <h6 className="card__title">modules / STO / ISTO.sol</h6>
            <p className="card__description">
              This is an interface to be implemented by all STO modules. This
              contract is used to verify the investment, whether the investor
              provide the allowance to the STO or not.
            </p>
          </div>
          <div className="card__row">
            <h6 className="card__title">
              contracts / SecurityTokenRegistry.sol
            </h6>
            <p className="card__description">
              Registry contract for issuers to register their security tokens.
              Creates a new Security Token and saves it to the registry. You can
              add a new custom Security Token (Token should follow the
              SecurityToken interface) and save it to the registry.
            </p>
          </div>
        </div>
        <div className="card card_theme_light card_type_column">
          <img className="card__image" src={example2Image} />
          <div className="card__row">
            <h6 className="card__title">contracts / interfaces / IST20.sol</h6>
            <p className="card__description">
              This is an interface for the ST20 Security Token standard. It
              mints new tokens and assigns them to the target investor, It also
              enables a Burn functions used to burn the securityToken.
            </p>
          </div>
          <div className="card__row">
            <h6 className="card__title">
              contracts / GeneralPermissionManager.sol
            </h6>
            <p className="card__description">
              This module allows issuers to define permissions for any actions
              or functions in any modules which are attached to their token, and
              then delegate those permissions to 3rd parties. Permissions are
              named and then defer to PermissionManager modules to check whether
              an adress trying to perform an action has approriate permission.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CodeExamplePure
