function extractContent(htmlString) {
  let span = document.createElement('span')
  span.innerHTML = htmlString
  return span.textContent || span.innerText
}

export default extractContent
