import React from 'react'
import EmployeeReviewsSlider from 'src/components/employeeReviewsSlider'
import './section_employee-feedback.less'

const EmployeeFeedback = () => (
  <section className="section section_employee-feedback">
    <div className="wrapper_section-content">
      <header className="headline">
        <h2 className="title title_type_section-big">Why our</h2>
        <h2 className="title title_type_section-big-attention">employees</h2>
        <h2 className="title title_type_section-big">choose</h2>
        <h2 className="title title_type_section-big-attention">Platinum</h2>
      </header>
      <EmployeeReviewsSlider />
    </div>
  </section>
)

export default EmployeeFeedback
