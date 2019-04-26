import React from 'react'
import TinySegmenter from './TinySegmenter'
import WordSeparationPure from './WordSeparationPure'

class WordSeparationSmart extends React.Component {
  constructor(props) {
    super(props)
  }

  separateWords(text) {
    const separatedWordsArray = new TinySegmenter().segment(text)

    let separatedWordsByTag = ''
    const separateExceptions = ['。', '、', '(', ')', ':', '！']

    for (let i = 0; i < separatedWordsArray.length; i++) {
      let word = separatedWordsArray[i]
      let nextWord = separatedWordsArray[i + 1]

      if (word === ' ') {
        word = `&nbsp;`
      }

      const separateExceptionFond = separateExceptions.find(
        exception => nextWord === exception
      )

      if (separateExceptionFond) {
        separatedWordsByTag += `<span>${word + nextWord}</span>`
        i++
      } else {
        separatedWordsByTag += `<span>${word}</span>`
      }
    }

    return separatedWordsByTag
  }

  render() {
    const text = this.props.string
      .replace(/&amp;/g, '&')
      .replace(/<br\s*[\/]?>/g, '<br/>')

    const fragmentedText = text.split('<br/>')

    const textToRenderArray = fragmentedText.map(textFragment => {
      const isFragmentInEnglish = textFragment.search(/[A-Za-z ]/g) !== -1
      return isFragmentInEnglish
        ? textFragment
        : this.separateWords(textFragment)
    })

    const textToRender = textToRenderArray.join('<br/>')

    return <WordSeparationPure {...this.props} text={textToRender} />
  }
}

export default WordSeparationSmart
