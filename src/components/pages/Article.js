import React, {Component, PropTypes} from 'react'
import {getEntrySlug} from '../../content'
import Markdown from 'react-markdown'

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const articleSlug = this.props.params.articleSlug
    if (articleSlug){
      getEntrySlug(articleSlug).then( res => this.setState({
        content: res.items[0].fields.body
      }))
    }

  }

  render() {
    const { content } = this.state
    return (
      <article className="article">
        <Markdown source={content ? content : 'nacitam'} />
      </article>
    )
  }
}

Article.propTypes = {
  params: PropTypes.object.isRequired
}
