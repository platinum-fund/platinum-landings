import React from 'react'
import ReviewsSlider from 'src/components/reviewsSlider'
import './section_reviews.less'

const Reviews = () => (
  <section className="section section_reviews">
    <div className="wrapper_section-content">
      <div className="headline">
        <h2 className="title title_type_section">
          TESTIMONIALS
        </h2>
      </div>
      <ReviewsSlider />
    </div>
  </section>
)

export default Reviews
