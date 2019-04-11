import React from 'react'
import './section_media-preview.less'

if (typeof window !== 'undefined') {
  require('platinum-ui/src/components/universal/media-preview')
}

const MediaSectionPure = () => (
  <section className="section section_media-preview">
    <div className="wrapper_section-content">
      <media-preview />
    </div>
  </section>
)

export default MediaSectionPure
