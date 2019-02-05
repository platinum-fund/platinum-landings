import React from 'react'
import ReviewsSlider from 'src/components/reviewsSlider'
import './section_reviews.less'

const Reviews = () => (
  <section className="section section_reviews">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section-attention">Feedbacks</h2>
        <h2 className="title title_type_section">from our clients</h2>
      </header>
      <ReviewsSlider />
    </div>
  </section>
)

export default Reviews
