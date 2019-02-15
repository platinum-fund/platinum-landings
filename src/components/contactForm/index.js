import React from 'react'
import ContactFormPure from './ContactFormPure'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      buttonStatus: null
    }
  }

  sendDataToServer = async data => {
    const { landingName } = this.props.config

    const header = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messenger: 'email',
        data,
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

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.dataWasSentRecently) {
      this.sendDataToServer(this.state.value)
    }
  }

  render() {
    return (
      <ContactFormPure
        label={this.props.label}
        placeholder={this.props.placeholder}
        buttonText={this.props.buttonText}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        buttonStatus={this.state.buttonStatus}
      />
    )
  }
}

export default ContactForm
