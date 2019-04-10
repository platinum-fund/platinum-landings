import React from 'react'
import './section_description-with-documents.less'
import DocumentFiles from './DocumentFiles'
import TranslationProvider from 'src/components/translationProvider'
import translations from './content/translations'
import { FormattedHTMLMessage } from 'react-intl'

const DescriptionWithDocuments = () => (
  <TranslationProvider translations={translations}>
    <div className="section section_description-with-documents">
      <div className="wrapper_section-content">
        <div className="o-column-text">
          <h1 className="c-column-header">
            <FormattedHTMLMessage id="biggestProblemYourTokenIs" />
          </h1>
          <p className="c-text-fragment" data-i18n="thePriceHaveDecreasedTwice">
            <FormattedHTMLMessage id="thePriceHaveDecreasedTwice" />
          </p>
          <p className="c-text-fragment" data-i18n="noTradeVolumeNo">
            <FormattedHTMLMessage id="noTradeVolumeNo" />
          </p>
        </div>
        <div className="document-files-subsection">
          <h6 className="c-download-header" data-i18n="downloadNow">
            <FormattedHTMLMessage id="downloadNow" />
          </h6>
          <DocumentFiles />
        </div>
      </div>
    </div>
  </TranslationProvider>
)

export default DescriptionWithDocuments
