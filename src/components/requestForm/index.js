import React from 'react'
import RequestFormPure from './RequestFormPure'

class RequestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonStatus: null
    }
  }

  sendDataToServer = async data => {
    const { landingName } = this.props.config

    const email = data.filter(item => item.name === 'email')
    const emailValue = email[0].value

    const info = data.filter(item => item.name !== 'email')

    const header = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messenger: 'email',
        data: emailValue,
        info: JSON.stringify(info),
        time: new Date().toString(),
        landing: landingName || 'common',
        referer: window.location.href
      })
    }

    const url = 'https://api-dev.platinum.fund/v1/inbox'

    const response = await fetch(url, header).catch(e => ({}))

    if (response.status === 200) {
      this.setState({ buttonStatus: 'success' })
    } else {
      this.setState({ buttonStatus: 'error' })
    }

    if (window && window.dataLayer) {
      window.dataLayer.push({
        event: 'form_send'
      })
    }

    this.dataWasSentRecently = true

    setTimeout(() => {
      this.dataWasSentRecently = false
      this.setState({ buttonStatus: null })
    }, 10000)
  }

  getData = target => {
    const { content } = this.props
    const inputs = [...content.inputs, ...content.radioBoxes]

    let data = []

    for (const input of inputs) {
      const inputElement = target.elements[input.name]
      const inputValue = inputElement.value

      if (inputValue.trim() !== '') {
        data.push({ name: input.name, value: inputValue })
      }
    }

    return data
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.dataWasSentRecently) {
      const data = this.getData(e.target)
      this.sendDataToServer(data)
    }
  }

  render() {
    return (
      <RequestFormPure
        content={this.props.content}
        inputData={this.state.data}
        buttonStatus={this.state.buttonStatus}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default RequestForm
