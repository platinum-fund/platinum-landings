const content = {
  contactForm: {
    inputs: [
      {
        required: true,
        placeholder: 'tokenName',
        type: 'text',
        name: 'tokenName'
      },
      {
        required: true,
        placeholder: 'tokenPriceInUSD',
        type: 'price',
        name: 'tokenPrice'
      },
      {
        required: false,
        placeholder: 'howMuchAreYouAimingToRaise',
        type: 'cost',
        name: 'planToRaise'
      },
      {
        required: false,
        placeholder: 'companyName',
        type: 'text',
        name: 'companyName'
      },
      {
        required: false,
        placeholder: 'companyWebsite',
        type: 'text',
        name: 'CompanyWebsite'
      },
      {
        required: true,
        placeholder: 'yourEmail',
        type: 'email',
        name: 'email'
      }
    ],
    radioBoxes: [
      {
        label: 'areYouLookingForHelp',
        name: 'bringing-investors',
        values: ['yes', 'no']
      }
    ]
  }
}

export default content
