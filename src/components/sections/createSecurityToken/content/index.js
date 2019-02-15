const content = {
  contactForm: {
    inputs: [
      {
        required: true,
        placeholder: 'Token name*',
        type: 'text',
        name: 'tokenName'
      },
      {
        required: true,
        placeholder: 'Token price in USD*',
        type: 'price',
        name: 'tokenPrice'
      },
      {
        required: false,
        placeholder: 'How much are you aiming to raise?',
        type: 'cost',
        name: 'planToRaise'
      },
      {
        required: false,
        placeholder: 'Company name',
        type: 'text',
        name: 'companyName'
      },
      {
        required: false,
        placeholder: 'Company website',
        type: 'text',
        name: 'CompanyWebsite'
      },
      {
        required: true,
        placeholder: 'Your email*',
        type: 'email',
        name: 'email'
      }
    ],
    radioBoxes: [
      {
        label: 'Are you looking for help bringing investors for you?',
        name: 'bringing-investors',
        values: ['yes', 'no']
      }
    ]
  }
}

export default content
