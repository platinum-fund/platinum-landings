import React from 'react'
import LazyLoad from 'vanilla-lazyload'
import lazyloadConfig from './config'

const isDocumentExist = typeof document !== 'undefined'

if (isDocumentExist && !document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad(lazyloadConfig)
}

class LazyImage extends React.Component {
  componentDidMount() {
    isDocumentExist && document.lazyLoadInstance.update()
  }

  componentDidUpdate() {
    isDocumentExist && document.lazyLoadInstance.update()
  }

  render() {
    const {
      className = '',
      alt,
      src,
      srcset,
      sizes,
      width,
      height
    } = this.props
    return (
      <img
        className={`js-lazy ${className}`}
        alt={alt}
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
        width={width}
        height={height}
      />
    )
  }
}

export default LazyImage
