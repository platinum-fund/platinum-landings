import React from 'react'
import './section_employees-companies.less'
import content from './content'
import LazyImage from 'src/components/lazyImage'
import { FormattedHTMLMessage } from 'react-intl'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const EmployeesCompaniesHistory = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_employees-companies">
      <div className="wrapper_section-content">
        <header className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="title" />
          </h2>
        </header>
        <div className="companies">
          {content.map(item => (
            <div className="companies__item" key={item.name}>
              <LazyImage
                className="companies__item-image"
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </TranslationProvider>
)

export default EmployeesCompaniesHistory
