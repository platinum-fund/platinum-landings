let timeoutTimer
let emailWasSentRecently

function getUtmData() {
  const url = window.location.href
  const utmList = url.split('utm').slice(1)
  let result

  if (utmList.length > 0) {
    result = utmList.map(item => {
      return item
        .replace('_source=', 'Campaign Source: ')
        .replace('_medium=', 'Campaign Medium: ')
        .replace('_campaign=', 'Campaign Name: ')
        .replace('_term=', 'Campaign Term: ')
        .replace('_content=', 'Campaign Content: ')
        .replace('&', '')
    })
    result = result.join('; ')
  } else {
    result = `Not Identified (doesn't exist)`
  }

  return result
}

const changeButtonStatus = status => {
  const defaultButton = document
    .getElementsByClassName('js-send-button-default')
    .item(0)
  const successButton = document
    .getElementsByClassName('js-send-button-success')
    .item(0)

  if (status !== 200) {
    return 0
  }

  defaultButton.style.display = 'none'
  successButton.style.display = 'block'

  if (timeoutTimer === undefined) {
    timeoutTimer = setTimeout(() => {
      defaultButton.style.display = 'block'
      successButton.style.display = 'none'
      timeoutTimer = undefined
    }, 10000)
  }
}

const sendEmail = async (name, email, message) => {
  const header = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messenger: 'Email',
      name,
      email,
      message,
      utm: getUtmData(),
      landing: 'zmest',
      time: new Date().toString()
    })
  }
  const url = 'https://api-dev.platinum.fund/v1/inbox'
  const response = await fetch(url, header)
  changeButtonStatus(response.status)
}

export const handleClick = e => {
  e.preventDefault()
  const name = document.getElementsByName('name').item(0).value
  const email = document.getElementsByName('email').item(0).value
  const message = document.getElementsByName('message').item(0).value

  if (!emailWasSentRecently) {
    sendEmail(name, email, message)
    emailWasSentRecently = true
    setTimeout(() => {
      emailWasSentRecently = false
    }, 10000)
  }
}
