import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'

const Alink = ({n, path, isActive}) => (
  <div className={classnames("pagination__item", {'is-active': isActive})}>
    <Link to={path === '/' ? `/page/${n}` : `${path}/${n}`}>{n}</Link>
  </div>
)

Alink.propTypes = {
  n: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
}

export default class Pagination extends Component {
  constructor(props) {
    super(props)
  }

  buildLinks() {
    const { current, numberOfPages, path } = this.props
    let links = []

    for (let i = 1; i < numberOfPages; i++) {
      links.push(<Alink
        key={'alink' + i}
        n={i}
        isActive={i === current}
        path={path}
      />

      )
    }
    if (links.length > 1)
      return links
  }

  render() {
    return (
      <div className="pagination">
        { this.buildLinks() }
      </div>
    )
  }
}

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
}
