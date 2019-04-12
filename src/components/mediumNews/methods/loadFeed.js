async function loadFeed() {
  this.setState({ isLoading: true })

  const url =
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40PlatinumFund'
  const response = await fetch(url).catch(e => ({}))

  if (response.status == 200) {
    const body = await response.json()
    this.setState({
      feed: body.items.slice(0, 4),
      isLoading: false
    })
  } else {
    this.setState({ error: true, isLoading: false })
  }
}

export default loadFeed
