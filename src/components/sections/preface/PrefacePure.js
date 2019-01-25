import React from 'react'
import './section_preface.less'
import { FormattedMessage } from 'react-intl'

const PrefacePure = () => (
  <section className="section _preface">
    <div className="wrapper _shrink">
      <FormattedMessage id="hello" defaultMessage={'hello default'} />
    </div>
  </section>
)

export default PrefacePure
