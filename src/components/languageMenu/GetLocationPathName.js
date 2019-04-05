const GetLocationPathName = window.location.href
  .split('/')
  .filter(function(element) {
    return element !== ''
  })
  .pop()

export default GetLocationPathName
