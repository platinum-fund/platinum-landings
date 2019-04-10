import React from 'react'
import WithLanguageContext from 'src/contexts/language/WithLanguageContext'
import loadFeed from './methods/loadFeed'
import MediumNewsPure from './MediumNewsPure'

class MediumNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.loadFeed()
  }

  render() {
    const { feed, isLoading, error } = this.state

    return <MediumNewsPure feed={feed} isLoading={isLoading} error={error} />
  }
}

MediumNews.prototype.loadFeed = loadFeed

export default WithLanguageContext(MediumNews)
