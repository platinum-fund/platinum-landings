const LocationPathName =
  typeof window !== 'undefined'
    ? window.location.href
        .split('/')
        .filter(function(element) {
          return element !== ''
        })
        .pop()
    : ''

export default LocationPathName
