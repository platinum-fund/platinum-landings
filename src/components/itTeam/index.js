import React from 'react'
import ItTeamPure from './ItTeamPure'
import { NextArrow, PrevArrow } from 'src/components/slickSlider'
import 'src/components/slickSlider/slick-slider-arrow.less'

class ItTeam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shownMember: null
    }
  }

  handleClick = (e, member) => {
    e.preventDefault()
    this.setState({ shownMember: member })
  }

  render() {
    const sliderSettings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <ItTeamPure
        sliderSettings={sliderSettings}
        handleClick={this.handleClick}
        shownMember={this.state.shownMember}
      />
    )
  }
}

export default ItTeam
