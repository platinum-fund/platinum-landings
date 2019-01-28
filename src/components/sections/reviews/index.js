import React from 'react'
import ReviewsSlider from 'src/components/reviewsSlider'
import './section_reviews.less'

const Reviews = () => (
  <section className="section _reviews">
    <div className="wrapper _shrink">
      <div className="headline">
        <h2 className="title _type_section _orange">Feedbacks</h2>
        <h2 className="title _type_section">from our clients</h2>
      </div>
      <ReviewsSlider />
    </div>
  </section>
)

export default Reviews
