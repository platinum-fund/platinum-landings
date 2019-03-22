import image1 from './images/1.png'
import image2 from './images/2.png'
import image3 from './images/3.png'
import image4 from './images/4.png'
import image5 from './images/5.png'

const sliders = [
  {
    title: 'ourTeam',
    image: image1,
    list: [
      {
        title: 'slide1List1Title',
        description: 'slide1List1Description'
      },
      {
        title: 'slide1List2Title',
        description: 'slide1List2Description'
      },
      {
        title: 'slide1List3Title',
        description: 'slide1List3Description'
      },
      {
        title: 'slide1List4Title',
        description: 'slide1List4Description'
      }
    ]
  },
  {
    title: 'ourOffices',
    image: image2,
    listClassName: '_no-padding',
    list: [
      {
        title: 'slide2List1Title',
        description: ''
      },
      {
        title: 'slide2List2Title',
        description: ''
      }
    ]
  },
  {
    title: 'ourWorkingTime',
    image: image3,
    listClassName: '_no-padding',
    list: [
      {
        title: 'slide3List1Title',
        description: 'slide3List1Description',
        className: '_reverse'
      },
      {
        title: '',
        description: 'slide3List2Description',
        className: '_reverse'
      }
    ]
  },
  {
    title: 'partnerNetwork',
    image: image4,
    listClassName: '_no-padding',
    list: [
      {
        title: 'slide4List1Title',
        description: 'slide4List1Description'
      },
      {
        title: 'slide4List2Title',
        description: 'slide4List2Description'
      },
      {
        title: 'slide4List3Title',
        description: 'slide4List3Description'
      },
      {
        title: 'slide4List4Title',
        description: 'slide4List4Description'
      }
    ]
  },
  {
    title: 'services',
    image: image5,
    list: [
      {
        title: '',
        description: 'slide5List1Description',
        className: '_diamond'
      },
      {
        title: '',
        description: 'slide5List2Description',
        className: '_diamond'
      },
      {
        title: '',
        description: 'slide5List3Description',
        className: '_diamond'
      },
      {
        title: '',
        description: 'slide5List4Description',
        className: '_diamond'
      },
      {
        title: '',
        description: 'slide5List5Description',
        className: '_diamond'
      }
    ]
  }
]

export default sliders
