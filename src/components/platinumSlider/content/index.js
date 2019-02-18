import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'
import '../slider.less'

const sliders = [
  {
    title: 'Our  team',
    image: image1,
    list: [
      {
        title: '112+',
        description:
          'Members In-house IT, Marketing, Legal, Support, Sales departments and Call-centre '
      },
      {
        title: '72,5%',
        description: "Master's degree in IT, Marketing, Management and Finance"
      },
      {
        title: '3+',
        description: 'years experience in crypto markets '
      },
      {
        title: '7+',
        description: 'years experience in financial markets '
      }
    ]
  },
  {
    title: 'Our  offices',
    image: image2,
    listClassName: '_no-padding',
    list: [
      {
        title: 'Minsk, Kiev, Moscow, Seoul, Singapore,',
        description: ''
      },
      {
        title: 'Shanghai, Bangkok, Tokyo, Yangon, Colombo',
        description: ''
      }
    ]
  },
  {
    title: 'Our  working  time',
    image: image3,
    listClassName: '_no-padding',
    list: [
      {
        title: '24/7',
        description: 'We are avaliable',
        className: '_reverse'
      },
      {
        title: '',
        description:
          'Our clients can take a rest, while we are taking care about the progress',
        className: '_reverse'
      }
    ]
  },
  {
    title: 'Partner network',
    image: image4,
    listClassName: '_no-padding',
    list: [
      {
        title: '978',
        description: 'Global and regional media outlets'
      },
      {
        title: '312',
        description: 'Bloggers and Influencers'
      },
      {
        title: '93',
        description: 'Investment partners'
      },
      {
        title: '17',
        description: 'Crypto exchanges'
      }
    ]
  },
  {
    title: 'Services',
    image: image5,
    list: [
      {
        title: '',
        description: 'Investment packages and fundraising for STO and ICO',
        className: '_diamond'
      },
      {
        title: '',
        description: 'Listing on exchanges and Market making',
        className: '_diamond'
      },
      {
        title: '',
        description: 'Tokenization and STO and ICO Dashboards',
        className: '_diamond'
      },
      {
        title: '',
        description: 'Legal framework and Incorporation',
        className: '_diamond'
      },
      {
        title: '',
        description: 'Marketing for STO, ICO and IEO projects',
        className: '_diamond'
      }
    ]
  }
]

export default sliders
