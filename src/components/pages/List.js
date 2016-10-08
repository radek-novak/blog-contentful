import React, {Component, PropTypes} from 'react'
import config from '../../config'
import ArticleLink from '../partials/ArticleLink'
import Pagination from '../partials/Pagination'

import {
  getEntries
} from '../../content'

const parseArticleLinks = (response) => response.items.map(articleItem => {
    const fields = articleItem.fields
    const imageUrl = fields.featuredImage ? fields.featuredImage.fields.file.url : null
    return {
      title: fields.title,
      link: `/article/${fields.slug}`,
      bgImg: imageUrl,
      body: fields.body
    }
  })

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    const params = nextProps.params
    const categoryName = params.categoryName
    const page = params.page

    let opts = {}
    if (page && page > 0)
      opts.skip = (page - 1) * config.pageSize
    if (categoryName)
      opts['fields.tags[in]'] = categoryName.toLowerCase()

    getEntries(opts).catch(err => console.error(err))
      .then(res => {
        this.setState({
          articleLinks: parseArticleLinks(res),
          total: res.total
        })
      })
  }

  render() {
    const { articleLinks, total } = this.state
    const { page } = this.props.params

    return (
      <div>
        {
          articleLinks ? articleLinks.map((lnk, i) => <ArticleLink key={'artcllnk' + i} {...lnk} />) : 'nacitam'
        }
        <div>
          <Pagination
            current={+page || 1}
            numberOfPages={(total / config.pageSize + 1) || 1}
            path={this.props.location.pathname.replace(/(\/\d+$)/, '')}
          />
        </div>
      </div>
    )

  }
}

List.propTypes = {
  params: PropTypes.any,
  location: PropTypes.any
}
