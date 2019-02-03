import React from 'react'
import SliderPure from './SliderPure'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0,
      lastSlideIndex: 0
    }
  }

  componentDidMount() {
    const childrenCount = React.Children.count(this.props.children)
    this.setState({ lastSlideIndex: childrenCount - 1 })
  }

  nextSlide = () => {
    const { currentSlideIndex, lastSlideIndex } = this.state

    if (currentSlideIndex < lastSlideIndex) {
      this.setState({ currentSlideIndex: currentSlideIndex + 1 })
    }
  }

  prevSlide = () => {
    const { currentSlideIndex } = this.state

    if (currentSlideIndex > 0) {
      this.setState({ currentSlideIndex: currentSlideIndex - 1 })
    }
  }

  render() {
    return (
      <SliderPure
        nextSlide={this.nextSlide}
        prevSlide={this.prevSlide}
        currentSlideIndex={this.state.currentSlideIndex}
        lastSlideIndex={this.state.lastSlideIndex}
      >
        {this.props.children}
      </SliderPure>
    )
  }
}

export default Slider
