import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'

const content = [
  {
    name: 'Anton Dziatkovskii',
    position: <FormattedHTMLMessage id="coFounder" />,
    photo: require('./images/photos/anton.png'),
    socials: [
      {
        user: 'antondz',
        name: 'telegram',
        title: <FormattedHTMLMessage id="joinTelegram" />,
        qrImage: require('./images/qrs/anton/telegram.png')
      },
      {
        user: 'Anton.Dziatkovskii',
        title: <FormattedHTMLMessage id="joinLine" />,
        name: 'line',
        qrImage: require('./images/qrs/anton/line.png')
      },
      {
        user: 'Anton.Dziatkovskii',
        title: <FormattedHTMLMessage id="joinWechat" />,
        name: 'wechat',
        qrImage: require('./images/qrs/anton/wechat.png')
      },
      {
        user: 'AntonDZ',
        title: <FormattedHTMLMessage id="joinKakao" />,
        name: 'kakaotalk',
        qrImage: require('./images/qrs/anton/kakao.png')
      },
      {
        user: 'AntonDziatkovskii',
        title: <FormattedHTMLMessage id="joinFacebook" />,
        name: 'facebook',
        qrImage: require('./images/qrs/anton/facebook.png')
      }
    ]
  },
  {
    name: 'Dan Khomenko',
    position: <FormattedHTMLMessage id="coFounder" />,
    photo: require('./images/photos/dan.png'),
    socials: [
      {
        user: 'DanKom',
        title: <FormattedHTMLMessage id="joinTelegram" />,
        name: 'telegram',
        qrImage: require('./images/qrs/dan/telegram.png')
      },
      {
        user: 'Dan Khomenko',
        title: <FormattedHTMLMessage id="joinLinkedin" />,
        name: 'linkedin',
        qrImage: require('./images/qrs/dan/linked.png')
      },
      {
        user: 'Dankhom',
        title: <FormattedHTMLMessage id="joinWechat" />,
        name: 'wechat',
        qrImage: require('./images/qrs/dan/wechat.png')
      }
    ]
  },
  {
    name: 'Ivan Nosha',
    position: <FormattedHTMLMessage id="salesDirector" />,
    photo: require('./images/photos/ivan.png'),
    socials: [
      {
        user: 'noshman',
        title: <FormattedHTMLMessage id="joinTelegram" />,
        name: 'telegram',
        qrImage: require('./images/qrs/ivan/telegram.png')
      },
      {
        user: '',
        title: <FormattedHTMLMessage id="joinLine" />,
        name: 'line',
        qrImage: require('./images/qrs/ivan/line.png')
      },
      {
        user: 'in@listing.fund',
        title: <FormattedHTMLMessage id="joinEmail" />,
        name: 'email',
        qrImage: require('./images/qrs/ivan/email.png')
      },
      {
        user: 'IvanNosha',
        title: <FormattedHTMLMessage id="joinWechat" />,
        name: 'wechat',
        qrImage: require('./images/qrs/ivan/wechat.png')
      }
    ]
  },
  {
    name: 'Pavel Bogush',
    position: <FormattedHTMLMessage id="coo" />,
    photo: require('./images/photos/pavel.jpg'),
    socials: [
      {
        user: 'NewHappyDay',
        title: <FormattedHTMLMessage id="joinTelegram" />,
        name: 'telegram',
        qrImage: require('./images/qrs/pavel/telegram.png')
      },
      {
        user: 'Bogushpv',
        title: <FormattedHTMLMessage id="joinLine" />,
        name: 'line',
        qrImage: require('./images/qrs/pavel/line.png')
      },
      {
        user: 'bp@platinum.fund',
        title: <FormattedHTMLMessage id="joinEmail" />,
        name: 'email',
        qrImage: require('./images/qrs/pavel/email.png')
      },
      {
        user: 'Pavel_Bogush',
        title: <FormattedHTMLMessage id="joinWechat" />,
        name: 'wechat',
        qrImage: require('./images/qrs/pavel/wechat.png')
      }
    ]
  }
]

export default content
