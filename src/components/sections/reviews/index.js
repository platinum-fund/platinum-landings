import React from 'react'
import ReviewsSlider from 'src/components/reviewsSlider'
import './section_reviews.less'
import { FormattedHTMLMessage } from 'src/components/i18n'
import TranslationProvider from 'src/components/translationProvider'
import translations from './translations'

const Reviews = () => (
  <TranslationProvider translations={translations}>
    <section className="section section_reviews">
      <div className="wrapper_section-content">
        <div className="headline">
          <h2 className="title title_type_section">
            <FormattedHTMLMessage id="testimonials" />
          </h2>
        </div>
        <ReviewsSlider />
      </div>
    </section>
  </TranslationProvider>
)

export default Reviews
