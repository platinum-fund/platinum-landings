import React from 'react'
import './document-files-subsection.less'
import docImg from '../content/images/icons/pdf.svg'
import closeBtn from '../content/images/icons/closebut.svg'
import { FormattedHTMLMessage } from 'react-intl'

const docsList = [
  {
    name: <FormattedHTMLMessage id="howToMakeYourTokenSuperstar" />,
    desc: <FormattedHTMLMessage id="toMakeYourTokenSuperstar" />
  },
  {
    name: <FormattedHTMLMessage id="whyMyTokenFall" />,
    desc: <FormattedHTMLMessage id="thereCouldBeManyFactors" />
  }
]

const DocDescBlock = props => {
  const { list, index, onCloseClick, onBackgroundClick, isClosing } = props

  if (index === undefined) {
    return <div />
  }

  let backgroundClassName = 'o-doc-desc-back'
  if (isClosing) {
    backgroundClassName += ' block-disappears'
  }

  return (
    <div className={backgroundClassName} onClick={e => onBackgroundClick(e)}>
      <div className="o-doc-desc">
        <h4 className="c-doc-desc-name">{list[index].name}</h4>
        <p className="c-doc-desc">{list[index].desc}</p>
        <img
          className="c-close-btn"
          src={closeBtn}
          alt="close button"
          onClick={onCloseClick}
        />
      </div>
    </div>
  )
}

const DocBlock = ({ blockInfo, index, onClick }) => (
  <div className="o-doc-file" onClick={onClick}>
    <img className="c-file-img" src={docImg} alt="file" />
    <p className="c-file-format">PDF, 800kb</p>
    <p className="c-file-desc">{blockInfo.name}</p>
  </div>
)

class DocumentFiles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      docsList,
      chosenDescIndex: undefined,
      isDescClosing: false
    }
    this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this)
    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this)
  }

  handleSeeMoreClick(index) {
    this.setState({ chosenDescIndex: index })
  }

  handleCloseClick() {
    this.setState({ isDescClosing: true })
    // adding delay to animate closing
    setTimeout(
      () => this.setState({ chosenDescIndex: undefined, isDescClosing: false }),
      800
    )
  }

  handleBackgroundClick(e) {
    const target = e.target
    const clickedOnBackground = target.className === 'o-doc-desc-back'
    if (clickedOnBackground) {
      this.handleCloseClick()
    }
  }

  render() {
    return (
      <div className="o-doc-files">
        {this.state.docsList.map((item, i) => (
          <DocBlock
            key={'supportblock' + item.name}
            blockInfo={item}
            index={i}
            onClick={() => this.handleSeeMoreClick(i)}
          />
        ))}
        <DocDescBlock
          list={this.state.docsList}
          index={this.state.chosenDescIndex}
          onCloseClick={this.handleCloseClick}
          onBackgroundClick={e => this.handleBackgroundClick(e)}
          isClosing={this.state.isDescClosing}
        />
      </div>
    )
  }
}

export default DocumentFiles
